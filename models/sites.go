package models

import (
	"errors"

	"github.com/jinzhu/gorm"
	"2oo/db"
)

type Link struct {
	gorm.Model
	Identification string `gorm:"size:100;unique"`
	Origin         string `gorm:"size:2084;unique"`
	Shorten        string `gorm:"primary_key;size:100;unique"`
	ViewCount      int
	BlockedReason  string `gorm:"size:100"`
	Disable        *bool  `gorm:"default:false"`
	Private        *bool  `gorm:"default:false"`
	Owned          string `gorm:"size:100"`
}

type Links []Link

func (l *Link) TableName() string {
	return "lin9_links"
}

func (l *Link) GetBy(col string, val interface{}) error {
	err := db.Sess().Where(col+" = ?", val).First(&l)

	if err.RecordNotFound() {
		return errors.New("the record does not exists")
	}

	return nil
}

func (l *Link) GetAll(col string, val interface{}) error {
	err := db.Sess().Where(col+" = ?", val).Find(&Links{})

	if err.RecordNotFound() {
		return errors.New("the record does not exists")
	}

	return nil
}

func (l *Link) Create() *gorm.DB {

	if err := db.Sess().Create(&l); err != nil {
		return err
	}

	return nil
}

func (l *Link) Update() *gorm.DB {

	if err := db.Sess().Save(&l); err != nil {
		return err
	}

	return nil
}
