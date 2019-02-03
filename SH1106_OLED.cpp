#include "pxt.h"
#include "Adafruit_SH1106.h"
using namespace pxt;


namespace OLED {
	#define SSD1306_ADDRESS 0x78
	#undef printf
	
	MicroBitI2C i2c(I2C_SDA0, I2C_SCL0);
	Adafruit_SSD1306_I2c *oled;

	//aqee, for around a bug of makecode
	//https://github.com/Microsoft/pxt/issues/4033
	//rect round radius
	int _r=1;

	void init(int height, int width){
		if (oled != NULL) delete oled;
		oled = new Adafruit_SSD1306_I2c(i2c, SSD1306_ADDRESS, height, width);
		oled->splash();
		oled->display();
	}
	
	//%
	void init_terminal(int height, int width){
		if (oled != NULL) delete oled;
		oled = new Adafruit_SSD1306_I2c(i2c, SSD1306_ADDRESS, height, width);
		oled->clearDisplay();
		oled->display();
		oled->setTextCursor(0, 0);
	}

    //%
    void drawPixel(int x, int y){
        oled->drawPixel(x,y,1);
    }
	
	//%
    void showString(String text) { //aqee, fixed
    //void showString(StringData *text) {
		oled->printf("%s\n", text->data);
		oled->display();
    }
    
    //%
    void showNumber (int number) {
		oled->printf("%d\n", number);
		oled->display();
	}

    //%
	void display(){
		oled->display();
	}

	//%
	void clearDisplay(){
		oled->clearDisplay();
		oled->display();
		oled->setTextCursor(0, 0);
	}

	//%
	void textCursor(int x, int y){
		oled->setTextCursor(x, y);
	}

	//%
	void textSize(int s){
        oled->setTextSize(s);
	}

	//%
	void textWrap(bool b){
        oled->setTextWrap(b);
	}

    //%
    void drawCircle(int x, int y, int r){
		oled->drawCircle(x, y, r, WHITE);
	}

	//%
	void fillCircle(int x, int y, int r){
		oled->fillCircle(x, y, r, WHITE);
	}

	//%
	void drawLine(int x0, int y0, int x1, int y1){
		oled->drawLine(x0, y0, x1, y1, WHITE);
	}

	//%
	void fillRectWhite(int x, int y, int w, int h){
		oled->fillRect(x, y, w, h, WHITE);
	}

	//%
	void fillRectBlack(int x, int y, int w, int h){
		oled->fillRect(x, y, w, h, BLACK);
	}

	//%
    void drawRect(int x, int y, int w, int h){
    	oled->drawRect(x, y, w, h, WHITE);
    }

	//%
	void setRoundRectRadius(int r)
	{
		_r=r;
	}

    //%
	void fillRoundRect(int x, int y, int w, int h){
		oled->fillRoundRect(x, y, w, h, _r, WHITE);
	}

	//%
    void drawRoundRect(int x, int y, int w, int h){
    	oled->drawRoundRect(x, y, w, h, _r, WHITE);
    }

    //%
    void drawTriangle(int x0, int y0, int x1, int y1){
    	oled->drawTriangle(x0, y0, x1, y1, x1+20, y1, WHITE);
    }

    //%
    void fillTriangle(int x0, int y0, int x1, int y1, int x2, int y2){
    	oled->fillTriangle(x0, y0, x1, y1, x2, y2, WHITE);
    }

    #define printf(...) uBit.serial.printf(__VA_ARGS__)

}