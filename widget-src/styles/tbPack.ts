import packInterface from "./styleInterfaces/packInterface";

export const tbPack: packInterface = {
    calculator: {
        effect: [
            {
                type: "inner-shadow" as const,
                color: "#00000014",
                offset: { x: -10, y: -10 },
                blur: 4,
            },
            {
                type: "inner-shadow" as const,
                color: "#FFFFFF14",
                offset: { x: 10, y: 10 },
                blur: 4,
            },
        ],
        fill: [
            {
                type: "solid",
                color: { r: 0, g: 0, b: 0, a: 1 },
            },
            {
                type: "gradient-linear" as const,
                gradientHandlePositions: [
                    { x: 0, y: 0 },
                    { x: 1, y: 1 },
                    { x: 0.5, y: -0.246 },
                ] as [Vector, Vector, Vector],
                gradientStops: [
                    {
                        position: 0,
                        color: { r: 0.36, g: 0.36, b: 0.36, a: 1 },
                    },
                    {
                        position: 1,
                        color: { r: 0.36, g: 0.36, b: 0.36, a: 0.68 },
                    },
                ],
            },
        ],
        stroke: "#50505057",
    },
    buttons: [
        {
            effect:
                [
                    {
                        type: "inner-shadow",
                        color: "#00000014",
                        offset: { x: -8, y: -8 },
                        blur: 20,
                    },
                    {
                        type: "inner-shadow",
                        color: "#FFFFFF0D",
                        offset: { x: 8, y: 8 },
                        blur: 20,
                    },
                    {
                        type: "drop-shadow",
                        color: "#00000014",
                        offset: { x: 2, y: 2 },
                        blur: 8,
                        showShadowBehindNode: false,
                    },
                    {
                        type: "drop-shadow",
                        color: "#00000021",
                        offset: { x: 0, y: 0 },
                        blur: 2,
                        spread: 1,
                        showShadowBehindNode: false,
                    },
                ],
            fill: '#5E5E5E',
            hoverStyle: {
                fill: '#6e6e6e',
            },
        },
        {
            effect:
                [
                    {
                        type: "inner-shadow",
                        color: "#00000014",
                        offset: { x: -8, y: -8 },
                        blur: 20,
                    },
                    {
                        type: "inner-shadow",
                        color: "#8C8B990D",
                        offset: { x: 8, y: 8 },
                        blur: 20,
                    },
                    {
                        type: "drop-shadow",
                        color: "#00000014",
                        offset: { x: 2, y: 2 },
                        blur: 8,
                    },
                    {
                        type: "drop-shadow",
                        color: "#00000021",
                        offset: { x: 0, y: 0 },
                        blur: 2,
                        spread: 1,
                    },
                ],
            fill: '#5B596E',
            hoverStyle: {
                fill: '#66647d'
            },
        },
        {
            effect:
                [
                    {
                        type: "inner-shadow",
                        color: "#00000014",
                        offset: { x: -8, y: -8 },
                        blur: 20,
                    },
                    {
                        type: "inner-shadow",
                        color: "#8C8B990D",
                        offset: { x: 8, y: 8 },
                        blur: 20,
                    },
                    {
                        type: "drop-shadow",
                        color: "#00000014",
                        offset: { x: 2, y: 2 },
                        blur: 8,
                        showShadowBehindNode: false,
                    },
                    {
                        type: "drop-shadow",
                        color: "#00000021",
                        offset: { x: 0, y: 0 },
                        blur: 2,
                        spread: 1,
                        showShadowBehindNode: false,
                    },
                ],
            fill: '#838383',
            hoverStyle: {
                fill: '#919191',
            }
        }
    ]
};