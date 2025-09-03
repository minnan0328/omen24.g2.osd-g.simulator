// 管理 > 無障礙

import type { Nodes } from "@/types";
import { ModeType } from "@/types";
import { DefaultNodes, BackNodes, OnNodes, OffNodes } from '../_utilities';

const BackNodesEnum = new BackNodes();
const OnNodesEnum = new OnNodes();
const OffNodesEnum = new OffNodes();

export default class AutoSwitchInputNodes extends DefaultNodes implements Nodes {
    key = "AutoSwitchInput";
    selected = OnNodesEnum.selected;
    result = OnNodesEnum.result;
    assignDisplay = false;
    displayValue = true;
    size = 3;
    page = 1;
    mode = ModeType.button;
    language = {
        German: "Autom. ing. omsch.",
        SimplifiedChinese: "输入自动切换",
        TraditionalChinese: "自動切換輸入",
        English: "Auto-Switch Input",
        Español: "Cambio automático de entrada",
        French: "Entrée activation autom.",
        Italian: "Ingresso comm. aut.",
        Japanese: "自動切替入力",
        Nederlands: "Autom. ing. omsch.",
        BrazilianPortuguese: "Auto mudança de entrada",
        Russian: "Авто смена входа"
    };
    nodes = [
        {
            ...JSON.parse(JSON.stringify(OnNodesEnum)),
            parents: this.key
        },
        {
            ...JSON.parse(JSON.stringify(OffNodesEnum)),
            parents: this.key
        },
        // 上一步
        {
            ...JSON.parse(JSON.stringify(BackNodesEnum)),
            parents: this.key
        }
    ]
};