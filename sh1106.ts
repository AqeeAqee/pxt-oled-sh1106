//% icon="\uf26c"
//% color="255" weight="90"
namespace OLED {

    /**
     * initialises the i2c OLED display
     * @param height height (in pixels), eg: 64
     * @param width width (in pixels), eg: 128
     */
    //% weight=100
    //% blockId=oled_init_terminal
    //% block="initialize OLED with height %height|width %width"
    //% icon="\uf1ec" 
    //% shim=OLED::init_terminal
    export function init(height: number, width: number): void {
        return;
    }

    /**
     * prints a string on the OLED display
     * @param text text to display, eg: "Hello, world!"
     */
    //% weight=87 blockGap=8
    //% block="show|string %text" 
    //% async
    //% blockId=oled_print_string
    //% icon="\uf1ec"
    //% shim=OLED::showString
    export function showString(text: string): void {
        console.log("display: " + text);
        return;
    }

    /**
     * prints a number on the OLED display
     * @param number number to display, eg: 123
     */
    //% weight=96
    //% blockId=oled_print_number
    //% block="show|number %number" blockGap=8
    //% async 
    //% shim=OLED::showNumber
    export function showNumber(number: number): void {
        console.log("display: " + number);
        return;
    }

    /**
     * pour all draw in buffer to real screen.
     */
    //% blockId=oled_display
    //% block="OLED display to screen"
    //% icon="\uf1ec" 
    //% shim=OLED::display
    export function display(): void {
        return;
    }


    /**
     * moves the draw a Pixel.
     * @param x x (in pixels), eg: 11
     * @param y y (in pixels), eg: 11
     */
    //% blockId=oled_draw_pixel
    //% block="draw a Pixel at x %x|y %y"
    //% icon="\uf1ec" 
    //% shim=OLED::drawPixel
    export function drawPixel(x: number, y: number): void {
        return;
    }

    /**
     * draw a Line.
     * @param x x (in pixels), eg: 22
     * @param y y (in pixels), eg: 2
     * @param x1 x1 (in pixels), eg: 77
     * @param y1 y1 (in pixels), eg: 44
     */
    //% blockId=oled_draw_line
    //% block="draw a Line from (%x|, %y) to (%x1|, %y1)"
    //% inlineInputMode=inline
    //% icon="\uf1ec" 
    //% shim=OLED::drawLine
    export function drawLine(x: number, y: number, x1: number, y1: number): void {
        return;
    }

    /**
     * draw a circle (color = white).
     * @param x x (in pixels), eg: 22
     * @param y y (in pixels), eg: 22
     * @param r r (in pixels), eg: 11
     */
    //% blockId=oled_draw_circle
    //% block="draw circle at center (%x|, %y), radius =|%r"
    //% inlineInputMode=inline
    //% icon="\uf1ec" 
    //% shim=OLED::drawCircle
    export function drawCircle(x: number, y: number, r: number): void {
        return;
    }

    /**
     * draw a filled circle (color = white).
     * @param x x (in pixels), eg: 33
     * @param y y (in pixels), eg: 33
     * @param r r (in pixels), eg: 22
     */
    //% blockId=oled_fill_circle
    //% block="draw filled circle at center (%x|, %y), radius =|%r"
    //% inlineInputMode=inline
    //% icon="\uf1ec" 
    //% shim=OLED::fillCircle
    export function fillCircle(x: number, y: number, r: number): void {
        return;
    }

    /**
     * draws a rectangle
     * @param x x (in pixels), eg: 22
     * @param y y (in pixels), eg: 22
     * @param w w (in pixels), eg: 15
     * @param h h (in pixels), eg: 15
     */
    //% blockId=oled_draw_rect
    //% block="draw a rectangle at (%x, %y) width:%w| height:%h"
    //% inlineInputMode=inline
    //% icon="\uf1ec" 
    //% shim=OLED::drawRect
    export function drawRect(x: number, y: number, w: number, h: number): void {
        return;
    }

    /**
     * draws a filled rectangle (color = white).
     * @param x x (in pixels), eg: 22
     * @param y y (in pixels), eg: 22
     * @param w w (in pixels), eg: 15
     * @param h h (in pixels), eg: 15
     */
    //% blockId=oled_filled_rect_white
    //% block="filled white rectangle at (%x|, %y) width:%w| height:%h"
    //% inlineInputMode=inline
    //% icon="\uf1ec" 
    //% shim=OLED::fillRectWhite
    export function fillRectWhite(x: number, y: number, w: number, h: number): void {
        return;
    }

    /**
     * draws a filled rectangle (color = black).
     * @param x x (in pixels), eg: 22
     * @param y y (in pixels), eg: 22
     * @param w w (in pixels), eg: 15
     * @param h h (in pixels), eg: 15
     */
    //% blockId=oled_filled_rect_black
    //% block="filled black rectangle at (%x|, %y) width:%w| height:%h"
    //% inlineInputMode=inline
    //% icon="\uf1ec" 
    //% shim=OLED::fillRectBlack
    export function fillRectBlack(x: number, y: number, w: number, h: number): void {
        return;
    }

    /**
     * set round corners for following round rectangle
     * @param r r (in pixels), eg: 5
     */
    //% blockId=oled_set_rect_round
    //% block="set corners radius:|%r for following round rectangle"
    //% inlineInputMode=inline
    //% icon="\uf1ec" 
    //% shim=OLED::setRoundRectRadius
    export function setRoundRectRadius(r: number): void {
        return;
    }

    /**
     * draws a round-corners rectangle 
     * @param x x (in pixels), eg: 22
     * @param y y (in pixels), eg: 22
     * @param w w (in pixels), eg: 15
     * @param h h (in pixels), eg: 15
     */
    //% blockId=oled_draw_rect_round
    //% block="draw a round-corners rectangle at (%x|, %y) width:%w| height:%h"
    //% inlineInputMode=inline
    //% icon="\uf1ec" 
    //% shim=OLED::drawRoundRect
    export function drawRoundRect(x: number, y: number, w: number, h: number): void {
        return;
    }

    /**
     * draws a filled rectangle with round corners
     * @param x x (in pixels), eg: 22
     * @param y y (in pixels), eg: 22
     * @param w w (in pixels), eg: 15
     * @param h h (in pixels), eg: 15
     */
    //% blockId=oled_fill_rect_round
    //% block="draw a filled round-corners rectangle at (%x|, %y) width:%w| height:%h"
    //% inlineInputMode=inline
    //% icon="\uf1ec" 
    //% shim=OLED::fillRoundRect
    export function fillRoundRect(x: number, y: number, w: number, h: number): void {
        return;
    }

    /**
     * draws a Triangle
     * @param x0 x0 (in pixels), eg: 33
     * @param y0 y0 (in pixels), eg: 60
     * @param x1 x1 (in pixels), eg: 44
     * @param y1 y1 (in pixels), eg: 33
     * @param x2 x2 (in pixels), eg: 55
     * @param y2 y2 (in pixels), eg: 22
     */
    //% blockId=oled_draw_triangle
    //% block="draw a Triangle at points: (%x0|, %y0|), (%x1|, %y1|), (%x2|, %y2|)"
    //% inlineInputMode=inline
    //% icon="\uf1ec" 
    //% shim=OLED::drawTriangle
    export function drawTriangle(x0: number, y0: number, x1: number, y1: number, x2: number, y2: number): void {
        return;
    }

    /**
     * draws a filled Triangle
     * @param x0 x0 (in pixels), eg: 33
     * @param y0 y0 (in pixels), eg: 13
     * @param x1 x1 (in pixels), eg: 44
     * @param y1 y1 (in pixels), eg: 33
     * @param x2 x2 (in pixels), eg: 55
     * @param y2 y2 (in pixels), eg: 22
     */
    //% blockId=oled_fill_triangle
    //% block="draw a filled Triangle at points: (%x0|, %y0|), (%x1|, %y1|), (%x2|, %y2|)"
    //% inlineInputMode=inline
    //% icon="\uf1ec" 
    //% shim=OLED::fillTriangle
    export function fillTriangle(x0: number, y0: number, x1: number, y1: number, x2: number, y2: number): void {
        return;
    }

    /**
     * moves the text cursor.
     * @param x x (in pixels), eg: 11
     * @param y y (in pixels), eg: 11
     */
    //% blockId=oled_text_cursor
    //% block="text cursor x %x|y %y"
    //% icon="\uf1ec" 
    //% shim=OLED::textCursor
    export function textCursor(x: number, y: number): void {
        return;
    }

    /**
     * set the text size.
     * @param s s (in pixels), eg: 2
     */
    //% blockId=oled_text_size
    //% block="set text size |s %s"
    //% icon="\uf1ec" 
    //% shim=OLED::textSize
    export function textSize(s: number): void {
        return;
    }

    /**
     * set the text wrap or not at line right edge.
     * @param b b (in pixels), eg: false
     */
    //% blockId=oled_text_wrap
    //% block="set text wrap |b %b"
    //% icon="\uf1ec" 
    //% shim=OLED::textWrap
    export function textWrap(b: boolean): void {
        return;
    }

    /**
     * clears the screen.
     */
    //% blockId=oled_clear_screen
    //% block="clear OLED display"
    //% icon="\uf1ec" 
    //% shim=OLED::clearDisplay
    export function clear(): void {
        return;
    }

}