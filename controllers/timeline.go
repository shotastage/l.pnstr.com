package controllers

import (
	"net/http"

	"github.com/labstack/echo"
	"2oo/models"
)

func ShareLinkTimelineController(c echo.Context) error {

	var l models.Link

	l.GetAll("private", false)

	for _, elm := range models.Links {

	}

	res := &ShareLinkTimelineResponse{}

	return c.JSON(http.StatusOK, res)
}