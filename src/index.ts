import { App } from 'uWebSockets.js';
import {
  errorInternalServerErrorDefault,
  encodeErrorInternalServerError,
  encodeMessageResponse,
  messageResponse,
  decodeMessageRequest,
  generatedFiles,
  generatedFile,
  errorParsingError,
} from '../schema/schema';
import { Deserializer, Serializer } from 'jsbuffer/codec';
import { FileGenerator } from 'jsbuffer/code-generator';
import fs from 'fs';
import path from 'path';
import { ASTGenerationException } from 'jsbuffer/src/ASTGenerator';

const s = new Serializer({
  textEncoder: new TextEncoder(),
});

App({})
  .ws('/ws', {
    message(ws, arrayBuffer) {
      const message = decodeMessageRequest(
        new Deserializer({
          buffer: new Uint8Array(arrayBuffer),
          textDecoder: new TextDecoder(),
        })
      );
      if (message === null) {
        encodeErrorInternalServerError(s, errorInternalServerErrorDefault());
        ws.send(s.view());
        return;
      }
      (async () => {
        const tmpDir = await fs.promises.mkdtemp('/tmp/');
        const tmpOutDir = await fs.promises.mkdtemp('/tmp/');
        const tmpFile = path.resolve(tmpDir, 'file');
        await fs.promises.writeFile(tmpFile, message.request.contents);
        const generator = new FileGenerator(
          {
            path: tmpFile,
          },
          {
            rootDir: tmpDir,
            outDir: tmpOutDir,
            textDecoder: new TextDecoder(),
            textEncoder: new TextEncoder(),
            indentationSize: 2,
          }
        );
        s.rewind();
        encodeMessageResponse(
          s,
          messageResponse({
            requestId: message.requestId,
            result: generatedFiles({
              files: (await generator.generate()).map((f) =>
                generatedFile({
                  path: f.file,
                  contents: f.contents,
                })
              ),
            }),
          })
        );
        ws.send(s.view(), true, false);
      })().catch((reason) => {
        console.error(reason);
        s.rewind();
        encodeMessageResponse(
          s,
          messageResponse({
            requestId: message.requestId,
            result:
              reason instanceof ASTGenerationException
                ? errorParsingError()
                : errorInternalServerErrorDefault(),
          })
        );
        ws.send(s.view(), true, false);
      });
    },
  })
  .any('/*', (res) => {
    res.write('ok');
    res.end();
  })
  .listen(4000, () => {
    console.log('listening on port: %d', 4000);
  });
