import { Aurum, DataSource } from 'aurumjs';
import '../scss/main.scss';
import { findAbjadForChar } from './numeral_mapping';

const textSource = new DataSource('');
const abjadValueSource = new DataSource(0);

Aurum.attach(
    <div class="root">
        <div class="title">Arabic abjad numerals calculator</div>
        <textarea value={textSource} />
        <button type="button" onClick={() => computeAbjadValue()}>
            Compute
        </button>
        <div class="result">Result: {abjadValueSource}</div>
    </div>,
    document.body
);

function computeAbjadValue(): void {
    let value = 0;
    const textToProcess: string = textSource.value
        .trim()
        .split(new RegExp('\\s'))
        .toString()
        .replace(/[&\/\\#,+()$~%.'":*?<>{}]/g, '');
    for (let i = 0; i < textToProcess.length; i++) {
        const foundValue = findAbjadForChar(textToProcess[i]);
        if (foundValue !== undefined) {
            value += foundValue;
        } else {
            console.error(`${textToProcess[i]} not found !`);
        }
    }
    abjadValueSource.update(value);
}
