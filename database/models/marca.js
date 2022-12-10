"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
const Schema = mongoose_1.default.Schema;
exports.default = (database) => {
    try {
        return database.model('marca');
    }
    catch (error) {
        // continue, because model doesnt exist
    }
    const MarcaSchema = new Schema({
        nombre: {
            type: String,
            required: true,
        },
        descripcion: {
            type: String,
        },
        tenant: {
            type: Schema.Types.ObjectId,
            ref: 'tenant',
            required: true
        },
        createdBy: {
            type: Schema.Types.ObjectId,
            ref: 'user',
        },
        updatedBy: {
            type: Schema.Types.ObjectId,
            ref: 'user',
        },
        importHash: { type: String },
    }, { timestamps: true });
    MarcaSchema.index({ importHash: 1, tenant: 1 }, {
        unique: true,
        partialFilterExpression: {
            importHash: { $type: 'string' },
        },
    });
    MarcaSchema.virtual('id').get(function () {
        // @ts-ignore
        return this._id.toHexString();
    });
    MarcaSchema.set('toJSON', {
        getters: true,
    });
    MarcaSchema.set('toObject', {
        getters: true,
    });
    return database.model('marca', MarcaSchema);
};
//# sourceMappingURL=marca.js.map