export function findAbjadForChar(char: string): number {
    return numeralMapping.find((tuple) => tuple[0].includes(char))?.[1];
}

const numeralMapping: [string, number][] = [
    ['\u0627 \uFE8D \uFE8E \u0621 \uFE80', 1],
    ['\u0628 \uFE8F \uFE90 \uFE92 \uFE91', 2],
    ['\u062C \uFE9D \uFE9E \uFEA0 \uFE9F', 3],
    ['\u062F \uFEA9 \uFEAA', 4],
    ['\u0647 \uFEE9 \uFEEA \uFEEC \uFEEB', 5],
    ['\u0648 \uFEED \uFEEE', 6],
    ['\u0632 \uFEAF \uFEB0', 7],
    ['\u062D \uFEA1 \uFEA2 \uFEA4 \uFEA3', 8],
    ['\u0637 \uFEC1 \uFEC2 \uFEC4 \uFEC3', 9],
    ['\u064A \uFEF1 \uFEF2 \uFEF4 \uFEF3', 10],
    ['\u0643 \uFED9 \uFEDA \uFEDC \uFEDB', 20],
    ['\u0644 \uFEDD \uFEDE \uFEE0 \uFEDF', 30],
    ['\u0645 \uFEE1 \uFEE2 \uFEE4 \uFEE3', 40],
    ['\u0646 \uFEE5 \uFEE6 \uFEE8 \uFEE7', 50],
    ['\u0633 \uFEB1 \uFEB2 \uFEB4 \uFEB3', 60],
    ['\u0639 \uFEC9 \uFECA \uFECC \uFECB', 70],
    ['\u0641 \uFED1 \uFED2 \uFED4 \uFED3', 80],
    ['\u0635 \uFEB9 \uFEBA \uFEBC \uFEBB', 90],
    ['\u0642 \uFED5 \uFED6 \uFED8 \uFED7', 100],
    ['\u0631 \uFEAD \uFEAE', 200],
    ['\u0634 \uFEB5 \uFEB6 \uFEB8 \uFEB7', 300],
    ['\u062A \uFE95 \uFE96 \uFE98 \uFE97', 400],
    ['\u062B \uFE99 \uFE9A \uFE9C \uFE9B', 500],
    ['\u062E \uFEA5 \uFEA6 \uFEA8 \uFEA7', 600],
    ['\u0630 \uFEAB \uFEAC', 700],
    ['\u0636 \uFEBD \uFEBE \uFEC0 \uFEBF', 800],
    ['\u0638 \uFEC5 \uFEC6 \uFEC8 \uFEC7', 900],
    ['\u063A \uFECD \uFECE  \uFED0 \uFECF', 1000]
];
