package static

import (
	"fmt"

	"2oo/config"
)

func Init(static_dir string) string {
	fmt.Println("Initializing static files environment...")
	config := config.Config.Static.Directory

	return config

}

type StaticFIle struct {
}
