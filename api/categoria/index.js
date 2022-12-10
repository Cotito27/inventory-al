"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = (app) => {
    app.post(`/tenant/:tenantId/categoria`, require('./categoriaCreate').default);
    app.put(`/tenant/:tenantId/categoria/:id`, require('./categoriaUpdate').default);
    app.post(`/tenant/:tenantId/categoria/import`, require('./categoriaImport').default);
    app.delete(`/tenant/:tenantId/categoria`, require('./categoriaDestroy').default);
    app.get(`/tenant/:tenantId/categoria/autocomplete`, require('./categoriaAutocomplete').default);
    app.get(`/tenant/:tenantId/categoria`, require('./categoriaList').default);
    app.get(`/tenant/:tenantId/categoria/:id`, require('./categoriaFind').default);
};
//# sourceMappingURL=index.js.map