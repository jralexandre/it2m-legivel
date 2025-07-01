// ==UserScript==
// @name         Texto Legível IT2M
// @namespace    mailto:jean@procempa.com.br
// @version      2025-06-27
// @description  Padronizar a cor de fundo e texto do conteúdo das tarefas e processos do IT2M
// @author       Jean Ribeiro Alexandre
// @match        https://it2m.procempa.com.br/it2m/User/Task?Id_Task=*
// @match        https://it2m.procempa.com.br/it2m/User/Process?Id_Process=*
// @icon         https://it2m.procempa.com.br/it2m/Images/icon.png
// @grant        none
// ==/UserScript==

(function() {
    'use strict';
    if (typeof window.jQuery !== 'undefined') {
        const $ = window.jQuery;
        $(document).ready(function() {
            $('div.card-title, div.rich_text_container, div.rich_text_container span, div.rich_text_container table, div.media-body *').css({'color':'', 'background-color':'' });
        });
    } else {
        console.warn("jQuery não encontrado.");
    }
})();