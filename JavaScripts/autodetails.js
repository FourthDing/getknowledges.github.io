"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
//自动读json，然后呈现
class AutoDetails extends HTMLDivElement {
    constructor() {
        super();
        this.src = "";
        if (this.dataset.src) {
            this.src = this.dataset.src;
        }
    }
    connectedCallback() {
        return __awaiter(this, void 0, void 0, function* () {
            if (this.dataset.src) {
                fetch(this.dataset.src)
                    .then(response => response.json()) // 解析 JSON 数据
                    .then(data => console.log(data)) // 处理数据
                    .catch(error => console.error('Error:', error)); // 错误处理
            }
        });
    }
}
customElements.define("mengxi-autodetails", AutoDetails, { extends: "div" });
