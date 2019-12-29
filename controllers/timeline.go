package controllers

import (
	"net/http"

	"2oo/models"
	"github.com/labstack/echo"
)

func (m *models.LinkImpl) ShareLinkTimelineController(c echo.Context) error {
	rows := []models.Link{}

	m.DB.Limit(5).Find(&rows)

	return c.JSON(http.StatusOK, &rows)
}
