"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.adminapp = void 0;
// src/models/AdminPanel.ts
const typeorm_1 = require("typeorm");
let adminapp = class adminapp {
    constructor() {
        this.nom_page = '';
        this.role_pag = '';
    }
};
exports.adminapp = adminapp;
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)(),
    __metadata("design:type", Number)
], adminapp.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], adminapp.prototype, "nom_page", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", Number)
], adminapp.prototype, "stat_admi", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], adminapp.prototype, "role_pag", void 0);
exports.adminapp = adminapp = __decorate([
    (0, typeorm_1.Entity)()
], adminapp);
