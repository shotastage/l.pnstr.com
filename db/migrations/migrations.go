package migrations

import (
	"log"

	"dnlink/db"
	"dnlink/models"
)

// Migrate is the function for make migration for debugging
func Migrate() {
	log.Println("WARNING: This operation might causes critical changes.")
	db.Sess().AutoMigrate(&models.Link{},
		&models.MiniProfile{},
		&models.User{},
		&models.UserDevice{},
		&models.Analytics{},
		&models.Malicious{},
		&models.AuthSession{},
		&models.LinkSave{})
}
