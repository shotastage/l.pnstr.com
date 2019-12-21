package interfaces

type ShareLinkTimelineResponse struct {
	Link []struct {
		Title       string `json:"title"`
		Description string `json:"Description"`
		Image       string `json:"Image"`
		Shorten     string `json:"Shorten"`
		Count       int    `json:"Count"`
	} `json:"link"`
}
