export const ThemeColors = () => {
    const rootStyle = getComputedStyle(document.body);
    return {
        themeColor1: rootStyle.getPropertyValue('--theme-color-1').trim(),
        themeColor2: rootStyle.getPropertyValue('--theme-color-2').trim(),
        themeColor3: rootStyle.getPropertyValue('--theme-color-3').trim(),
        themeColor4: rootStyle.getPropertyValue('--theme-color-4').trim(),
        themeColor5: rootStyle.getPropertyValue('--theme-color-5').trim(),
        themeColor6: rootStyle.getPropertyValue('--theme-color-6').trim(),
        themeColor1_10: rootStyle.getPropertyValue('--theme-color-1-10').trim(),
        themeColor2_10: rootStyle.getPropertyValue('--theme-color-2-10').trim(),
        themeColor3_10: rootStyle.getPropertyValue('--theme-color-3-10').trim(),
        themeColor4_10: rootStyle.getPropertyValue('--theme-color-3-10').trim(),
        themeColor5_10: rootStyle.getPropertyValue('--theme-color-3-10').trim(),
        themeColor6_10: rootStyle.getPropertyValue('--theme-color-3-10').trim(),
        primaryColor: rootStyle.getPropertyValue('--primary-color').trim(),
        foregroundColor: rootStyle.getPropertyValue('--foreground-color').trim(),
        separatorColor: rootStyle.getPropertyValue('--separator-color').trim(),
    };
};

const chartTooltipColor = ThemeColors()

export const chartTooltip = {
    backgroundColor: chartTooltipColor.foregroundColor,
    titleFontColor: chartTooltipColor.primaryColor,
    borderColor: chartTooltipColor.separatorColor,
    borderWidth: 0.5,
    bodyFontColor: chartTooltipColor.primaryColor,
    bodySpacing: 10,
    xPadding: 15,
    yPadding: 15,
    cornerRadius: 0.15,
};


export const barChartData = {
    labels: ['국어', '영어', '수학', '생활과 윤리', '경제', '한국사', '생명과학', '물리', '제2외국어'],
    datasets: [
        {
            label: '우리 반',
            borderColor: chartTooltipColor.themeColor1,
            backgroundColor: chartTooltipColor.themeColor1_10,
            data: [65, 85, 76, 34, 45, 65, 85, 76, 34],
            borderWidth: 2,
        },
        {
            label: '전체 평균',
            borderColor: chartTooltipColor.themeColor2,
            backgroundColor: chartTooltipColor.themeColor2_10,
            data: [76, 45, 23, 56, 74, 76, 45, 23, 56],
            borderWidth: 2,
        },
    ]
}
export const lineChartData = {
    labels: ['1학년 1학기', '1학년 2학기', '2학년 1학기', '2학년 2학기', '3학년 1학기', '3학년 2학기'],
    datasets: [
        {
            label: '',
            data: [54, 63, 60, 65, 60, 68, 60],
            borderColor: chartTooltipColor.themeColor1,
            pointBackgroundColor: chartTooltipColor.foregroundColor,
            pointBorderColor: chartTooltipColor.themeColor1,
            pointHoverBackgroundColor: chartTooltipColor.themeColor1,
            pointHoverBorderColor: chartTooltipColor.foregroundColor,
            pointRadius: 6,
            pointBorderWidth: 2,
            pointHoverRadius: 8,
            fill: false,
        },
    ],
};
export const radarChartData = {
    datasets: [
        {
            label: 'Stock',
            borderWidth: 2,
            pointBackgroundColor: chartTooltipColor.themeColor1,
            borderColor: chartTooltipColor.themeColor1,
            backgroundColor: chartTooltipColor.themeColor1_10,
            data: [80, 90, 70],
        },
        {
            label: 'Order',
            borderWidth: 2,
            pointBackgroundColor: chartTooltipColor.themeColor2,
            borderColor: chartTooltipColor.themeColor2,
            backgroundColor: chartTooltipColor.themeColor2_10,
            data: [68, 80, 95],
        },
    ],
    labels: ['Cakes', 'Desserts', 'Cupcakes'],
};
export const scatterChartData = {
    datasets: [
        {
            borderWidth: 2,
            showLine: false,
            label: '우리 반',
            borderColor: "red",
            /*borderColor: chartTooltipColor.themeColor1,*/
            backgroundColor: chartTooltipColor.themeColor1_10,
            data: [
                {x: 1, y: 1},
                {x: 200, y: 2},
                {x: 175, y: 3},
                {x: 100, y: 4},
            ],
        },
        {
            borderWidth: 2,
            showLine: false,
            label: '전체',
            borderColor: chartTooltipColor.themeColor2,
            backgroundColor: chartTooltipColor.themeColor2_10,
            data: [
                {x: 25, y: 1},
                {x: 250, y: 2},
                {x: 132, y: 3},
                {x: 176, y: 4},
                {x: 34, y: 1},
                {x: 257, y: 2},
                {x: 112, y: 3},
                {x: 98, y: 4},
            ],
        },
    ],
};