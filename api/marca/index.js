"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = (app) => {
    app.post(`/tenant/:tenantId/marca`, require('./marcaCreate').default);
    app.put(`/tenant/:tenantId/marca/:id`, require('./marcaUpdate').default);
    app.post(`/tenant/:tenantId/marca/import`, require('./marcaImport').default);
    app.delete(`/tenant/:tenantId/marca`, require('./marcaDestroy').default);
    app.get(`/tenant/:tenantId/marca/autocomplete`, require('./marcaAutocomplete').default);
    app.get(`/tenant/:tenantId/marca`, require('./marcaList').default);
    app.get(`/tenant/:tenantId/marca/:id`, require('./marcaFind').default);
};
//# sourceMappingURL=index.js.map