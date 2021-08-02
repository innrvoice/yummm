import { createUseStyles } from 'react-jss';
import { colors } from '../../../theme';

interface INeededProps {
  loading?: boolean;
  animationDuration: number;
}

const ecv = [
  [colors.orange, colors.purple, colors.red, colors.blue, colors.violet, colors.lime],
  [colors.lime, colors.orange, colors.purple, colors.red, colors.blue, colors.violet],
  [colors.violet, colors.lime, colors.orange, colors.purple, colors.red, colors.blue],
  [colors.blue, colors.violet, colors.lime, colors.orange, colors.purple, colors.red],
  [colors.red, colors.blue, colors.violet, colors.lime, colors.orange, colors.purple],
  [colors.purple, colors.red, colors.blue, colors.violet, colors.lime, colors.orange],
];

const color = Math.floor(Math.random() * 6);

export default createUseStyles(
  {
    root: {
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
    },

    y: {
      fill: ecv[color][0],
      animation: (props: INeededProps) =>
        props.loading
          ? `$animateY ${props.animationDuration}s infinite ease-out`
          : '',
    },

    u: {
      fill: ecv[color][1],
      animation: (props: INeededProps) =>
        props.loading
          ? `$animateU ${props.animationDuration}s infinite ease-out`
          : '',
    },

    m1p1: {
      fill: ecv[color][2],
      animation: (props: INeededProps) =>
        props.loading
          ? `$animateM1P1 ${props.animationDuration}s infinite ease-out`
          : '',
    },

    m1p2: {
      fill:ecv[color][3],
      animation: (props: INeededProps) =>
        props.loading
          ? `$animateM1P2 ${props.animationDuration}s infinite ease-out`
          : '',
    },

    m1p3: {
      fill: ecv[color][4],
      animation: (props: INeededProps) =>
        props.loading
          ? `$animateM1P3 ${props.animationDuration}s infinite ease-out`
          : '',
    },

    m2p1: {
      fill: ecv[color][0],
      animation: (props: INeededProps) =>
        props.loading
          ? `$animateM2P1 ${props.animationDuration}s infinite ease-out`
          : '',
    },

    m2p2: {
      fill: ecv[color][0],
      animation: (props: INeededProps) =>
        props.loading
          ? `$animateM2P2 ${props.animationDuration}s infinite ease-out`
          : '',
    },

    m2p3: {
      fill: ecv[color][0],
      animation: (props: INeededProps) =>
        props.loading
          ? `$animateM2P3 ${props.animationDuration}s infinite ease-out`
          : '',
    },

    m2p4: {
      fill: ecv[color][1],
      animation: (props: INeededProps) =>
        props.loading
          ? `$animateM2P4 ${props.animationDuration}s infinite ease-out`
          : '',
    },

    m2p5: {
      fill: ecv[color][1],
      animation: (props: INeededProps) =>
        props.loading
          ? `$animateM2P5 ${props.animationDuration}s infinite ease-out`
          : '',
    },

    m2p6: {
      fill: ecv[color][1],
      animation: (props: INeededProps) =>
        props.loading
          ? `$animateM2P6 ${props.animationDuration}s infinite ease-out`
          : '',
    },

    m2p7: {
      fill: ecv[color][2],
      animation: (props: INeededProps) =>
        props.loading
          ? `$animateM2P7 ${props.animationDuration}s infinite ease-out`
          : '',
    },

    m2p8: {
      fill: ecv[color][2],
      animation: (props: INeededProps) =>
        props.loading
          ? `$animateM2P8 ${props.animationDuration}s infinite ease-out`
          : '',
    },

    m2p9: {
      fill: ecv[color][2],
      animation: (props: INeededProps) =>
        props.loading
          ? `$animateM2P9 ${props.animationDuration}s infinite ease-out`
          : '',
    },

    m2p10: {
      fill: ecv[color][2],
      animation: (props: INeededProps) =>
        props.loading
          ? `$animateM2P10 ${props.animationDuration}s infinite ease-out`
          : '',
    },

    m2p11: {
      fill: ecv[color][2],
      animation: (props: INeededProps) =>
        props.loading
          ? `$animateM2P11 ${props.animationDuration}s infinite ease-out`
          : '',
    },

    m2p12: {
      fill: ecv[color][3],
      animation: (props: INeededProps) =>
        props.loading
          ? `$animateM2P12 ${props.animationDuration}s infinite ease-out`
          : '',
    },

    m2p13: {
      fill: ecv[color][3],
      animation: (props: INeededProps) =>
        props.loading
          ? `$animateM2P13 ${props.animationDuration}s infinite ease-out`
          : '',
    },

    m2p14: {
      fill: ecv[color][4],
      animation: (props: INeededProps) =>
        props.loading
          ? `$animateM2P14 ${props.animationDuration}s infinite ease-out`
          : '',
    },

    m2p15: {
      fill: ecv[color][4],
      animation: (props: INeededProps) =>
        props.loading
          ? `$animateM2P15 ${props.animationDuration}s infinite ease-out`
          : '',
    },

    '@keyframes animateY': {
      '0%': {
        fill: ecv[color][0],
      },
      '16.6%': {
        fill: ecv[color][5],
      },
      '33.2%': {
        fill: ecv[color][4],
      },
      '49.8%': {
        fill: ecv[color][3],
      },
      '66.4%': {
        fill: ecv[color][2],
      },
      '83%': {
        fill: ecv[color][1],
      },
      '100%': {
        fill: ecv[color][0],
      },
    },

    '@keyframes animateU': {
      '0%': {
        fill: ecv[color][1],
      },
      '16.6%': {
        fill: ecv[color][0],
      },
      '33.2%': {
        fill: ecv[color][5],
      },
      '49.8%': {
        fill: ecv[color][4],
      },
      '66.4%': {
        fill: ecv[color][3],
      },
      '83%': {
        fill: ecv[color][2],
      },
      '100%': {
        fill: ecv[color][1],
      },
    },

    '@keyframes animateM1P1': {
      '0%': {
        fill: ecv[color][2],
      },
      '16.6%': {
        fill: ecv[color][1],
      },
      '33.2%': {
        fill: ecv[color][0],
      },
      '49.8%': {
        fill: ecv[color][5],
      },
      '66.4%': {
        fill: ecv[color][4],
      },
      '83%': {
        fill: ecv[color][3],
      },
      '100%': {
        fill: ecv[color][2],
      },
    },

    '@keyframes animateM1P2': {
      '0%': {
        fill: ecv[color][3],
      },
      '16.6%': {
        fill: ecv[color][2],
      },
      '33.2%': {
        fill: ecv[color][1],
      },
      '49.8%': {
        fill: ecv[color][0],
      },
      '66.4%': {
        fill: ecv[color][5],
      },
      '83%': {
        fill: ecv[color][4],
      },
      '100%': {
        fill: ecv[color][3],
      },
    },

    '@keyframes animateM1P3': {
      '0%': {
        fill: ecv[color][4],
      },
      '16.6%': {
        fill: ecv[color][3],
      },
      '33.2%': {
        fill: ecv[color][2],
      },
      '49.8%': {
        fill: ecv[color][1],
      },
      '66.4%': {
        fill: ecv[color][0],
      },
      '83%': {
        fill: ecv[color][5],
      },
      '100%': {
        fill: ecv[color][4],
      },
    },

    '@keyframes animateM2P1': {
      '0%': {
        fill: ecv[color][0],
      },
      '5.8823529412%': {
        fill: ecv[color][5],
      },
      '11.7647058824%': {
        fill: ecv[color][5],
      },
      '17.6470588236%': {
        fill: ecv[color][5],
      },
      '23.5294117648%': {
        fill: ecv[color][4],
      },
      '29.411764706%': {
        fill: ecv[color][4],
      },
      '35.2941176472%': {
        fill: ecv[color][3],
      },
      '38.8888888892%': {
        fill: ecv[color][3],
      },
      '41.1764705884%': {
        fill: ecv[color][2],
      },
      '47.0588235296%': {
        fill: ecv[color][2],
      },
      '52.9411764708': {
        fill: ecv[color][2],
      },
      '58.823529412%': {
        fill: ecv[color][2],
      },
      '64.7058823532%': {
        fill: ecv[color][2],
      },
      '70.5882352944%': {
        fill: ecv[color][1],
      },
      '76.4705882356%': {
        fill: ecv[color][1],
      },
      '82.3529411768%': {
        fill: ecv[color][1],
      },
      '88.235294118%': {
        fill: ecv[color][0],
      },
      '94.1176470592%': {
        fill: ecv[color][0],
      },
      '100%': {
        fill: ecv[color][0],
      },
    },

    '@keyframes animateM2P2': {
      '0%': {
        fill: ecv[color][0],
      },
      '5.8823529412%': {
        fill: ecv[color][0],
      },
      '11.7647058824%': {
        fill: ecv[color][5],
      },
      '17.6470588236%': {
        fill: ecv[color][5],
      },
      '23.5294117648%': {
        fill: ecv[color][5],
      },
      '29.411764706%': {
        fill: ecv[color][4],
      },
      '35.2941176472%': {
        fill: ecv[color][4],
      },
      '38.8888888892%': {
        fill: ecv[color][3],
      },
      '41.1764705884%': {
        fill: ecv[color][3],
      },
      '47.0588235296%': {
        fill: ecv[color][2],
      },
      '52.9411764708': {
        fill: ecv[color][2],
      },
      '58.823529412%': {
        fill: ecv[color][2],
      },
      '64.7058823532%': {
        fill: ecv[color][2],
      },
      '70.5882352944%': {
        fill: ecv[color][2],
      },
      '76.4705882356%': {
        fill: ecv[color][1],
      },
      '82.3529411768%': {
        fill: ecv[color][1],
      },
      '88.235294118%': {
        fill: ecv[color][1],
      },
      '94.1176470592%': {
        fill: ecv[color][0],
      },
      '100%': {
        fill: ecv[color][0],
      },
    },

    '@keyframes animateM2P3': {
      '0%': {
        fill: ecv[color][0],
      },
      '5.8823529412%': {
        fill: ecv[color][0],
      },
      '11.7647058824%': {
        fill: ecv[color][0],
      },
      '17.6470588236%': {
        fill: ecv[color][5],
      },
      '23.5294117648%': {
        fill: ecv[color][5],
      },
      '29.411764706%': {
        fill: ecv[color][5],
      },
      '35.2941176472%': {
        fill: ecv[color][4],
      },
      '38.8888888892%': {
        fill: ecv[color][4],
      },
      '41.1764705884%': {
        fill: ecv[color][3],
      },
      '47.0588235296%': {
        fill: ecv[color][3],
      },
      '52.9411764708': {
        fill: ecv[color][2],
      },
      '58.823529412%': {
        fill: ecv[color][2],
      },
      '64.7058823532%': {
        fill: ecv[color][2],
      },
      '70.5882352944%': {
        fill: ecv[color][2],
      },
      '76.4705882356%': {
        fill: ecv[color][2],
      },
      '82.3529411768%': {
        fill: ecv[color][1],
      },
      '88.235294118%': {
        fill: ecv[color][1],
      },
      '94.1176470592%': {
        fill: ecv[color][1],
      },
      '100%': {
        fill: ecv[color][0],
      },
    },

    '@keyframes animateM2P4': {
      '0%': {
        fill: ecv[color][1],
      },
      '5.8823529412%': {
        fill: ecv[color][0],
      },
      '11.7647058824%': {
        fill: ecv[color][0],
      },
      '17.6470588236%': {
        fill: ecv[color][0],
      },
      '23.5294117648%': {
        fill: ecv[color][5],
      },
      '29.411764706%': {
        fill: ecv[color][5],
      },
      '35.2941176472%': {
        fill: ecv[color][5],
      },
      '38.8888888892%': {
        fill: ecv[color][4],
      },
      '41.1764705884%': {
        fill: ecv[color][4],
      },
      '47.0588235296%': {
        fill: ecv[color][3],
      },
      '52.9411764708': {
        fill: ecv[color][3],
      },
      '58.823529412%': {
        fill: ecv[color][2],
      },
      '64.7058823532%': {
        fill: ecv[color][2],
      },
      '70.5882352944%': {
        fill: ecv[color][2],
      },
      '76.4705882356%': {
        fill: ecv[color][2],
      },
      '82.3529411768%': {
        fill: ecv[color][2],
      },
      '88.235294118%': {
        fill: ecv[color][1],
      },
      '94.1176470592%': {
        fill: ecv[color][1],
      },
      '100%': {
        fill: ecv[color][1],
      },
    },

    '@keyframes animateM2P5': {
      '0%': {
        fill: ecv[color][1],
      },
      '5.8823529412%': {
        fill: ecv[color][1],
      },
      '11.7647058824%': {
        fill: ecv[color][0],
      },
      '17.6470588236%': {
        fill: ecv[color][0],
      },
      '23.5294117648%': {
        fill: ecv[color][0],
      },
      '29.411764706%': {
        fill: ecv[color][5],
      },
      '35.2941176472%': {
        fill: ecv[color][5],
      },
      '38.8888888892%': {
        fill: ecv[color][5],
      },
      '41.1764705884%': {
        fill: ecv[color][4],
      },
      '47.0588235296%': {
        fill: ecv[color][4],
      },
      '52.9411764708': {
        fill: ecv[color][3],
      },
      '58.823529412%': {
        fill: ecv[color][3],
      },
      '64.7058823532%': {
        fill: ecv[color][2],
      },
      '70.5882352944%': {
        fill: ecv[color][2],
      },
      '76.4705882356%': {
        fill: ecv[color][2],
      },
      '82.3529411768%': {
        fill: ecv[color][2],
      },
      '88.235294118%': {
        fill: ecv[color][2],
      },
      '94.1176470592%': {
        fill: ecv[color][1],
      },
      '100%': {
        fill: ecv[color][1],
      },
    },

    '@keyframes animateM2P6': {
      '0%': {
        fill: ecv[color][1],
      },
      '5.8823529412%': {
        fill: ecv[color][1],
      },
      '11.7647058824%': {
        fill: ecv[color][1],
      },
      '17.6470588236%': {
        fill: ecv[color][0],
      },
      '23.5294117648%': {
        fill: ecv[color][0],
      },
      '29.411764706%': {
        fill: ecv[color][0],
      },
      '35.2941176472%': {
        fill: ecv[color][5],
      },
      '38.8888888892%': {
        fill: ecv[color][5],
      },
      '41.1764705884%': {
        fill: ecv[color][5],
      },
      '47.0588235296%': {
        fill: ecv[color][4],
      },
      '52.9411764708': {
        fill: ecv[color][4],
      },
      '58.823529412%': {
        fill: ecv[color][3],
      },
      '64.7058823532%': {
        fill: ecv[color][3],
      },
      '70.5882352944%': {
        fill: ecv[color][2],
      },
      '76.4705882356%': {
        fill: ecv[color][2],
      },
      '82.3529411768%': {
        fill: ecv[color][2],
      },
      '88.235294118%': {
        fill: ecv[color][2],
      },
      '94.1176470592%': {
        fill: ecv[color][2],
      },
      '100%': {
        fill: ecv[color][1],
      },
    },

    '@keyframes animateM2P7': {
      '0%': {
        fill: ecv[color][2],
      },
      '5.8823529412%': {
        fill: ecv[color][1],
      },
      '11.7647058824%': {
        fill: ecv[color][1],
      },
      '17.6470588236%': {
        fill: ecv[color][1],
      },
      '23.5294117648%': {
        fill: ecv[color][0],
      },
      '29.411764706%': {
        fill: ecv[color][0],
      },
      '35.2941176472%': {
        fill: ecv[color][0],
      },
      '38.8888888892%': {
        fill: ecv[color][5],
      },
      '41.1764705884%': {
        fill: ecv[color][5],
      },
      '47.0588235296%': {
        fill: ecv[color][5],
      },
      '52.9411764708': {
        fill: ecv[color][4],
      },
      '58.823529412%': {
        fill: ecv[color][4],
      },
      '64.7058823532%': {
        fill: ecv[color][3],
      },
      '70.5882352944%': {
        fill: ecv[color][3],
      },
      '76.4705882356%': {
        fill: ecv[color][2],
      },
      '82.3529411768%': {
        fill: ecv[color][2],
      },
      '88.235294118%': {
        fill: ecv[color][2],
      },
      '94.1176470592%': {
        fill: ecv[color][2],
      },
      '100%': {
        fill: ecv[color][2],
      },
    },

    '@keyframes animateM2P8': {
      '0%': {
        fill: ecv[color][2],
      },
      '5.8823529412%': {
        fill: ecv[color][2],
      },
      '11.7647058824%': {
        fill: ecv[color][1],
      },
      '17.6470588236%': {
        fill: ecv[color][1],
      },
      '23.5294117648%': {
        fill: ecv[color][1],
      },
      '29.411764706%': {
        fill: ecv[color][0],
      },
      '35.2941176472%': {
        fill: ecv[color][0],
      },
      '38.8888888892%': {
        fill: ecv[color][0],
      },
      '41.1764705884%': {
        fill: ecv[color][5],
      },
      '47.0588235296%': {
        fill: ecv[color][5],
      },
      '52.9411764708': {
        fill: ecv[color][5],
      },
      '58.823529412%': {
        fill: ecv[color][4],
      },
      '64.7058823532%': {
        fill: ecv[color][4],
      },
      '70.5882352944%': {
        fill: ecv[color][3],
      },
      '76.4705882356%': {
        fill: ecv[color][3],
      },
      '82.3529411768%': {
        fill: ecv[color][2],
      },
      '88.235294118%': {
        fill: ecv[color][2],
      },
      '94.1176470592%': {
        fill: ecv[color][2],
      },
      '100%': {
        fill: ecv[color][2],
      },
    },

    '@keyframes animateM2P9': {
      '0%': {
        fill: ecv[color][2],
      },
      '5.8823529412%': {
        fill: ecv[color][2],
      },
      '11.7647058824%': {
        fill: ecv[color][2],
      },
      '17.6470588236%': {
        fill: ecv[color][1],
      },
      '23.5294117648%': {
        fill: ecv[color][1],
      },
      '29.411764706%': {
        fill: ecv[color][1],
      },
      '35.2941176472%': {
        fill: ecv[color][0],
      },
      '38.8888888892%': {
        fill: ecv[color][0],
      },
      '41.1764705884%': {
        fill: ecv[color][0],
      },
      '47.0588235296%': {
        fill: ecv[color][5],
      },
      '52.9411764708': {
        fill: ecv[color][5],
      },
      '58.823529412%': {
        fill: ecv[color][5],
      },
      '64.7058823532%': {
        fill: ecv[color][4],
      },
      '70.5882352944%': {
        fill: ecv[color][4],
      },
      '76.4705882356%': {
        fill: ecv[color][3],
      },
      '82.3529411768%': {
        fill: ecv[color][3],
      },
      '88.235294118%': {
        fill: ecv[color][2],
      },
      '94.1176470592%': {
        fill: ecv[color][2],
      },
      '100%': {
        fill: ecv[color][2],
      },
    },

    '@keyframes animateM2P10': {
      '0%': {
        fill: ecv[color][2],
      },
      '5.8823529412%': {
        fill: ecv[color][2],
      },
      '11.7647058824%': {
        fill: ecv[color][2],
      },
      '17.6470588236%': {
        fill: ecv[color][2],
      },
      '23.5294117648%': {
        fill: ecv[color][1],
      },
      '29.411764706%': {
        fill: ecv[color][1],
      },
      '35.2941176472%': {
        fill: ecv[color][1],
      },
      '38.8888888892%': {
        fill: ecv[color][0],
      },
      '41.1764705884%': {
        fill: ecv[color][0],
      },
      '47.0588235296%': {
        fill: ecv[color][0],
      },
      '52.9411764708': {
        fill: ecv[color][5],
      },
      '58.823529412%': {
        fill: ecv[color][5],
      },
      '64.7058823532%': {
        fill: ecv[color][5],
      },
      '70.5882352944%': {
        fill: ecv[color][4],
      },
      '76.4705882356%': {
        fill: ecv[color][4],
      },
      '82.3529411768%': {
        fill: ecv[color][3],
      },
      '88.235294118%': {
        fill: ecv[color][3],
      },
      '94.1176470592%': {
        fill: ecv[color][2],
      },
      '100%': {
        fill: ecv[color][2],
      },
    },

    '@keyframes animateM2P11': {
      '0%': {
        fill: ecv[color][2],
      },
      '5.8823529412%': {
        fill: ecv[color][2],
      },
      '11.7647058824%': {
        fill: ecv[color][2],
      },
      '17.6470588236%': {
        fill: ecv[color][2],
      },
      '23.5294117648%': {
        fill: ecv[color][2],
      },
      '29.411764706%': {
        fill: ecv[color][1],
      },
      '35.2941176472%': {
        fill: ecv[color][1],
      },
      '38.8888888892%': {
        fill: ecv[color][1],
      },
      '41.1764705884%': {
        fill: ecv[color][0],
      },
      '47.0588235296%': {
        fill: ecv[color][0],
      },
      '52.9411764708': {
        fill: ecv[color][0],
      },
      '58.823529412%': {
        fill: ecv[color][5],
      },
      '64.7058823532%': {
        fill: ecv[color][5],
      },
      '70.5882352944%': {
        fill: ecv[color][5],
      },
      '76.4705882356%': {
        fill: ecv[color][4],
      },
      '82.3529411768%': {
        fill: ecv[color][4],
      },
      '88.235294118%': {
        fill: ecv[color][3],
      },
      '94.1176470592%': {
        fill: ecv[color][3],
      },
      '100%': {
        fill: ecv[color][2],
      },
    },
    '@keyframes animateM2P12': {
      '0%': {
        fill: ecv[color][3],
      },
      '5.8823529412%': {
        fill: ecv[color][2],
      },
      '11.7647058824%': {
        fill: ecv[color][2],
      },
      '17.6470588236%': {
        fill: ecv[color][2],
      },
      '23.5294117648%': {
        fill: ecv[color][2],
      },
      '29.411764706%': {
        fill: ecv[color][2],
      },
      '35.2941176472%': {
        fill: ecv[color][1],
      },
      '38.8888888892%': {
        fill: ecv[color][1],
      },
      '41.1764705884%': {
        fill: ecv[color][1],
      },
      '47.0588235296%': {
        fill: ecv[color][0],
      },
      '52.9411764708': {
        fill: ecv[color][0],
      },
      '58.823529412%': {
        fill: ecv[color][0],
      },
      '64.7058823532%': {
        fill: ecv[color][5],
      },
      '70.5882352944%': {
        fill: ecv[color][5],
      },
      '76.4705882356%': {
        fill: ecv[color][5],
      },
      '82.3529411768%': {
        fill: ecv[color][4],
      },
      '88.235294118%': {
        fill: ecv[color][4],
      },
      '94.1176470592%': {
        fill: ecv[color][3],
      },
      '100%': {
        fill: ecv[color][3],
      },
    },

    '@keyframes animateM2P13': {
      '0%': {
        fill: ecv[color][3],
      },
      '5.8823529412%': {
        fill: ecv[color][3],
      },
      '11.7647058824%': {
        fill: ecv[color][2],
      },
      '17.6470588236%': {
        fill: ecv[color][2],
      },
      '23.5294117648%': {
        fill: ecv[color][2],
      },
      '29.411764706%': {
        fill: ecv[color][2],
      },
      '35.2941176472%': {
        fill: ecv[color][2],
      },
      '38.8888888892%': {
        fill: ecv[color][1],
      },
      '41.1764705884%': {
        fill: ecv[color][1],
      },
      '47.0588235296%': {
        fill: ecv[color][1],
      },
      '52.9411764708': {
        fill: ecv[color][0],
      },
      '58.823529412%': {
        fill: ecv[color][0],
      },
      '64.7058823532%': {
        fill: ecv[color][0],
      },
      '70.5882352944%': {
        fill: ecv[color][5],
      },
      '76.4705882356%': {
        fill: ecv[color][5],
      },
      '82.3529411768%': {
        fill: ecv[color][5],
      },
      '88.235294118%': {
        fill: ecv[color][4],
      },
      '94.1176470592%': {
        fill: ecv[color][4],
      },
      '100%': {
        fill: ecv[color][3],
      },
    },

    '@keyframes animateM2P14': {
      '0%': {
        fill: ecv[color][4],
      },
      '5.8823529412%': {
        fill: ecv[color][3],
      },
      '11.7647058824%': {
        fill: ecv[color][3],
      },
      '17.6470588236%': {
        fill: ecv[color][2],
      },
      '23.5294117648%': {
        fill: ecv[color][2],
      },
      '29.411764706%': {
        fill: ecv[color][2],
      },
      '35.2941176472%': {
        fill: ecv[color][2],
      },
      '38.8888888892%': {
        fill: ecv[color][2],
      },
      '41.1764705884%': {
        fill: ecv[color][1],
      },
      '47.0588235296%': {
        fill: ecv[color][1],
      },
      '52.9411764708': {
        fill: ecv[color][1],
      },
      '58.823529412%': {
        fill: ecv[color][0],
      },
      '64.7058823532%': {
        fill: ecv[color][0],
      },
      '70.5882352944%': {
        fill: ecv[color][0],
      },
      '76.4705882356%': {
        fill: ecv[color][5],
      },
      '82.3529411768%': {
        fill: ecv[color][5],
      },
      '88.235294118%': {
        fill: ecv[color][5],
      },
      '94.1176470592%': {
        fill: ecv[color][4],
      },
      '100%': {
        fill: ecv[color][4],
      },
    },

    '@keyframes animateM2P15': {
      '0%': {
        fill: ecv[color][4],
      },
      '5.8823529412%': {
        fill: ecv[color][4],
      },
      '11.7647058824%': {
        fill: ecv[color][3],
      },
      '17.6470588236%': {
        fill: ecv[color][3],
      },
      '23.5294117648%': {
        fill: ecv[color][2],
      },
      '29.411764706%': {
        fill: ecv[color][2],
      },
      '35.2941176472%': {
        fill: ecv[color][2],
      },
      '38.8888888892%': {
        fill: ecv[color][2],
      },
      '41.1764705884%': {
        fill: ecv[color][2],
      },
      '47.0588235296%': {
        fill: ecv[color][1],
      },
      '52.9411764708': {
        fill: ecv[color][1],
      },
      '58.823529412%': {
        fill: ecv[color][1],
      },
      '64.7058823532%': {
        fill: ecv[color][0],
      },
      '70.5882352944%': {
        fill: ecv[color][0],
      },
      '76.4705882356%': {
        fill: ecv[color][0],
      },
      '82.3529411768%': {
        fill: ecv[color][5],
      },
      '88.235294118%': {
        fill: ecv[color][5],
      },
      '94.1176470592%': {
        fill: ecv[color][5],
      },
      '100%': {
        fill: ecv[color][4],
      },
    },
  },
  { name: 'Logo' },
);
