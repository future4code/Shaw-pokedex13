import { extendTheme } from "@chakra-ui/react";

//DO CHAKRA NAO MUDAR
export const theme = extendTheme({
    colors: {
        main: {
            background: "#1F3E5B",
            primary: "#1E7143",
            secondary: "#E57810",
            font: "#FFFFFF"
        },

        "amarelo": {
            "50": "#A38300",
            "100": "#B89300",
            "200": "#CCA300",
            "300": "#E0B400",
            "400": "#F5C400",
            "500": "#FFCB05",
            "600": "#FFD21F",
            "700": "#FFD633",
            "800": "#FFDA47",
            "900": "#FFDE5C"
          },

          "vermelho": {
            "50": "#AC2020",
            "100": "#BE2323",
            "200": "#CF2626",
            "300": "#D93030",
            "400": "#DC4141",
            "500": "#DE4B4B",
            "600": "#E36464",
            "700": "#E67575",
            "800": "#E98686",
            "900": "#EC9898"
          }
    },

    fonts: {
        title: "Bangers, cursive", 
        body: "Press Start 2P, cursive"

    }
})


//VARIAVEIS PARA ESTILIZACAO 
export const COLORS = {
    
        background: "#9FB5A3",
        primary: "#DE4B4B",
        secondary: "#FFCB05",

        font: {
            primary: "#FFCB05",
            secondary: "#000000",
            alternative: "#FFFFFF"

        },

        amarelo: {

            "50": "#A38300",
            "100": "#B89300",
            "200": "#CCA300",
            "300": "#E0B400",
            "400": "#F5C400",
            "500": "#FFCB05",
            "600": "#FFD21F",
            "700": "#FFD633",
            "800": "#FFDA47",
            "900": "#FFDE5C"

        }, 

        vermelho: {
            "50": "#AC2020",
            "100": "#BE2323",
            "200": "#CF2626",
            "300": "#D93030",
            "400": "#DC4141",
            "500": "#DE4B4B",
            "600": "#E36464",
            "700": "#E67575",
            "800": "#E98686",
            "900": "#EC9898"
        }
    
}

export const HEADER = {
    size: "10vh"
}

export const MYFONTS = {
    title: "'Bangers', cursive", 
    body: "'Press Start 2P', cursive"
}