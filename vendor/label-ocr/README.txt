Offline label OCR dependencies (runtime requests stay on the same origin).

Tesseract.js 6.0.1: https://www.npmjs.com/package/tesseract.js/v/6.0.1
Tesseract.js-core 6.0.0: https://www.npmjs.com/package/tesseract.js-core/v/6.0.0
Chinese / English best_int models 1.0.0:
https://www.npmjs.com/package/@tesseract.js-data/chi_sim
https://www.npmjs.com/package/@tesseract.js-data/eng

Only LSTM-only (OEM=1) core builds are included, both SIMD and non-SIMD.
The wasm.js distributions include their WebAssembly payloads. Legacy OCR
and automatic orientation detection are not enabled by this app.
Model files are compressed traineddata; Tesseract caches them in IndexedDB.
No API key, third-party image upload or CDN fetch is required at runtime.
Upstream Apache license notices are retained in this folder.

Language model repository: https://github.com/naptha/tessdata (Apache-2.0 LICENSE retained). NPM wrapper package metadata declares MIT; see build provenance manifest in process documents. Files are copied unchanged from official NPM archives.
