import { Row } from './row';

export function getGrid(rows: number, width: number) : Row[] {
    return new Array(rows).fill(new Row(width));
}