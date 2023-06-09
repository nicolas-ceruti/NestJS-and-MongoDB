"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UsersModule = void 0;
require('dotenv/config');
const common_1 = require("@nestjs/common");
const users_controller_1 = require("./users.controller");
const user_service_1 = require("./user.service");
const user_schema_1 = require("./schema/user.schema");
const mongoose_1 = require("@nestjs/mongoose");
const mailer_1 = require("@nestjs-modules/mailer");
const axios_1 = require("@nestjs/axios");
const rabbit_mq_service_1 = require("../services/rabbit-mq/rabbit-mq.service");
const user = process.env.MAILER_USER;
const pass = process.env.MAILER_PASSWORD;
const host = process.env.MAILER_HOST;
let UsersModule = class UsersModule {
};
UsersModule = __decorate([
    (0, common_1.Module)({
        imports: [
            mongoose_1.MongooseModule.forFeature([{ name: 'Users', schema: user_schema_1.UserSchema }]),
            mailer_1.MailerModule.forRoot({
                transport: {
                    host: host,
                    auth: {
                        user: user,
                        pass: pass,
                    },
                },
            }),
            axios_1.HttpModule,
        ],
        controllers: [users_controller_1.UsersController],
        providers: [user_service_1.UserService, rabbit_mq_service_1.RabbitMqService],
    })
], UsersModule);
exports.UsersModule = UsersModule;
//# sourceMappingURL=users.module.js.map