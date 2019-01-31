//% icon="\uf26c"
//% color="255" weight="90"
namespace OLED {

    /**
     * initialises the i2c OLED display
     * @param height height (in pixels), eg: 64
     * @param width width (in pixels), eg: 128
     */
    //% blockId=oled_init_terminal
    //% block="initialize OLED with height %height|width %width"
    //% icon="\uf1ec" 
    //% shim=OLED::init_terminal
    export function init(height: number = 64, width: number = 128): void {
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
    export function drawPixel(x: number = 1, y: number = 1): void {
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
    export function textCursor(x: number = 1, y: number = 1): void {
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
    export function textSize(s: number = 1): void {
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
     * initialises the i2c OLED display
     * @param x x (in pixels), eg: 22
     * @param y y (in pixels), eg: 22
     * @param r r (in pixels), eg: 11
     */
    //% blockId=oled_draw_circle
    //% block="draw circle x %x|y %y|r %r"
    //% icon="\uf1ec" 
    //% shim=OLED::drawCircle
    export function drawCircle(x: number = 10, y: number = 10, r: number = 10): void {
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
    //% block="filled white rectangle x %x|y %y|w %w|h %h"
    //% icon="\uf1ec" 
    //% shim=OLED::fillRectWhite
    export function fillRectWhite(x: number = 10, y: number = 10, w: number = 10, h: number = 10): void {
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
    //% block="filled black rectangle x %x|y %y|w %w|h %h"
    //% icon="\uf1ec" 
    //% shim=OLED::fillRectBlack
    export function fillRectBlack(x: number = 10, y: number = 10, w: number = 10, h: number = 10): void {
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
    export function showString(text: string = "Hello, world!"): void {
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
    export function showNumber(number: number = 123): void {
        console.log("display: " + number);
        return;
    }
}