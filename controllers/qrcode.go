package controllers

import (
	"fmt"
	"net/http"
	"os"
	"strings"

	"dnlink/app/qrcode"

	"github.com/labstack/echo"
)

func QRCodeControllerGET(c echo.Context) error {

	urlID := c.Param("shortenID")

	qrlink := "https://l.pnstr.com/" + urlID

	if strings.Contains(urlID, "WIFI:") {
		qrlink = urlID
	}

	fpath := qrcode.GenerateQRByString(qrlink)

	f, err := os.Open(fpath)

	if err != nil {
		return err
	}

	if err := os.Remove(fpath); err != nil {
		fmt.Println(err)
	}

	return c.Stream(http.StatusOK, "image/png", f)
}
