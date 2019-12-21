package auth

import (
	"2oo/app/flake"
	"2oo/models"
)

func createSession(identification string, ip string, da string, ua string) string {

	var u models.User

	// var s models.AuthSession

	if err := u.GetBy("identification", identification); err != nil {
	}

	sess := models.AuthSession{
		Identification: identification,
		SessionToken:   flake.CreateRandomNext(100),
		IP:             ip,
		UserAgent:      ua,
		DeviceAgent:    da,
		Expires:        false,
	}
	sess.Create()

	sessToken := flake.CreateRandomNext(100)
	/*
		u.Devices = []models.UserDevice{
			{
				IP:          ip,
				DeviceAgent: da,
				UserAgent:   ua,
			},
		}

		u.Update()
	*/

	return sessToken
}
