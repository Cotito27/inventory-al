"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = (app) => {
    app.post(`/tenant/:tenantId/modelo`, require('./modeloCreate').default);
    app.put(`/tenant/:tenantId/modelo/:id`, require('./modeloUpdate').default);
    app.post(`/tenant/:tenantId/modelo/import`, require('./modeloImport').default);
    app.delete(`/tenant/:tenantId/modelo`, require('./modeloDestroy').default);
    app.get(`/tenant/:tenantId/modelo/autocomplete`, require('./modeloAutocomplete').default);
    app.get(`/tenant/:tenantId/modelo`, require('./modeloList').default);
    app.get(`/tenant/:tenantId/modelo/:id`, require('./modeloFind').default);
};
//# sourceMappingURL=index.js.map