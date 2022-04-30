import { css } from "styled-components";

const Vars = css`
  :root {
    /* ----- FONTS ----- */
    --font-regular: "NeueMontreal-Regular", -apple-system, BlinkMacSystemFont,
      San Francisco, Segoe UI, Roboto, Helvetica Neue, sans-serif;
    --font-medium: "NeueMontreal-Medium", -apple-system, BlinkMacSystemFont,
      San Francisco, Segoe UI, Roboto, Helvetica Neue, sans-serif;
    --font-bold: "NeueMontreal-Bold", -apple-system, BlinkMacSystemFont,
      San Francisco, Segoe UI, Roboto, Helvetica Neue, sans-serif;

    /* ----- COLORS ----- */
    /* Primary Colors */
    --primary-one: #6938ef;
    --primary-two: #0046ff;

    /* Neutrals */
    --neutral-0: #ffffff;
    --neutral-100: #c9cce4;
    --neutral-200: #b5b8d0;
    --neutral-300: #a1a4bc;
    --neutral-400: #525464;
    --neutral-500: #424453;
    --neutral-600: #35363d;
    --neutral-700: #292a31;
    --neutral-800: #1c1d25;
    --neutral-900: #0d0e17;
    --neutral-1000: #03040d;

    /* Supporting Colors */
    --supporting-azure-500: #17a8fd;
    --supporting-azure-600: #0183f5;

    --supporting-aqua-blue-500: #01ddcf;
    --supporting-aqua-blue-600: #01baae;

    --supporting-paris-gree-500: #49cb8e;
    --supporting-paris-gree-600: #27a96c;

    --supporting-lavender-indigo-500: #9661ff;
    --supporting-lavender-indigo-600: #7733ff;

    --supporting-heliotrope-500: #e858ff;
    --supporting-heliotrope-600: #d505f6;

    --supporting-sunglow-500: #fecc44;
    --supporting-sunglow-600: #e2a805;

    --supporting-basketball-500: #f9824e;
    --supporting-basketball-600: #fb6e4b;

    --supporting-brink-pink-500: #ff6676;
    --supporting-brink-pink-600: #ff4a7a;

    --supporting-cerise-pink-500: #ee3482;
    --supporting-cerise-pink-600: #d01664;

    --supporting-blue-orchid-500: #374bff;
    --supporting-blue-orchid-600: #2b3ac6;

    --supporting-chartreuse-500: #c9fa08;
    --supporting-chartreuse-600: #a1d200;

    --supporting-tealish-green-500: #76ff9c;
    --supporting-tealish-green-600: #4ed774;

    /* Gradients */
    --gradient-one: linear-gradient(
      100deg,
      #735aff 0%,
      #cc4eff 31.77%,
      #56adff 60.94%,
      #5b51ff 94.79%
    );
    --gradient-two: linear-gradient(
      100deg,
      #f36775 0%,
      #bb6afb 50.52%,
      #f7a277 100%
    );
    --gradient-three: linear-gradient(100deg, #6938ef 0%, #0046ff 100%);
    --gradient-four: linear-gradient(100deg, #f36775 0%, #bb6afb 100%);
    --gradient-five: linear-gradient(100deg, #d478ff 0%, #2e6cfa 100%);

    /* System */
    --system-information-500: #5c80ff;
    --system-information-700: #6938ef;
    --system-information-900: #070a19;

    --system-success-500: #00a28e;
    --system-success-700: #022427;
    --system-success-900: #030c13;

    --system-warning-500: #fe7e0e;
    --system-warning-700: #351c0d;
    --system-warning-900: #100a0d;

    --system-critical-500: #ff5631;
    --system-critical-700: #351414;
    --system-critical-900: #10080f;

    /* Shadows & Glows */
  }
`;

export default Vars;
