import http from "../../plugin/http-common";

class FetchDataService {	
	getAll() {
        return {
			"news_items": [
				{
					"id": "07119230-04bb-11eb-a2de-339725abdc4c",
					"title": "test",
					"category": 5,
					"news_credits": [{
						"url": "http://www.google.com",
						"link_text": "test credit"
					}, {
						"url": "http://www.google.com",
						"link_text": "test2 "
					}],
					"visual_credits": [{
						"url": "http://www.google.com",
						"link_text": "test visual"
					}, {
						"url": "kkkkk",
						"link_text": "kkkkk"
					}],
					"descriptions": [{
						"language": "english",
						"sentences": ["test description"]
					}],
					"updated_at": 1601648803,
					"created_at": 1601648688,
					"state": "awaiting_review_by_lead_video_editor",
					"clips": [{
						"id": "4b804c54-04bb-11eb-a2de-339725abdc4c",
						"url": "https://cdn.so.fa.dog/aws-transcoded-clips/43-07119230-04bb-11eb-a2de-339725abdc4c.m3u8",
						"aspect_ratio": "43",
						"updated_at": 1601648803,
						"created_at": 1601648803
					}, {
						"id": "4b8f58f2-04bb-11eb-a2de-339725abdc4c",
						"url": "https://cdn.so.fa.dog/aws-transcoded-clips/1959-07119230-04bb-11eb-a2de-339725abdc4c.m3u8",
						"aspect_ratio": "1959",
						"updated_at": 1601648803,
						"created_at": 1601648803
					}, {
						"id": "4b9086d2-04bb-11eb-a2de-339725abdc4c",
						"url": "https://cdn.so.fa.dog/aws-transcoded-clips/169-07119230-04bb-11eb-a2de-339725abdc4c.m3u8",
						"aspect_ratio": "169",
						"updated_at": 1601648803,
						"created_at": 1601648803
					}],
					"tags": ["nsfw"],
					"thumbnail": "https://cdn.so.fa.dog/thumbnails/07119230-04bb-11eb-a2de-339725abdc4c.jpg"
				}

			]
		}
	   //	return http.get("news_items?token=abcdef");
	}

	getAll1() {    
			return http.get("news_items?token=abcdef");
	}
		

	get(id) {
		return http.get(`/piece/${id}`);
	}

	news_items_submit(data) {
		console.log(data, "servcie data");
		//return false;
		return http.post("/news_items/" + data.id + "/submit?token=abcdef", {});
	}

	processedData(data,apiCallEndPoint){
		console.log(data, "servcie data");
		//return false;
		return http.post("/news_items/" + data.id + "/"+ apiCallEndPoint+"?token=abcdef", {});

	}
	newDataSave(data){
		console.log(data, "  === data");
		return http.post("/news_items?token=abcdef",data);
	}

	update(id, data) {
		return http.put(`/piece/${id}`, data);
	}

	delete(id) {
		return http.delete(`/piece/${id}`);
	}

	deleteAll() {
		return http.delete(`/piece`);
	}

	findByTitle(title) {
		return http.get(`/piece?title=${title}`);
	}

}

export default new FetchDataService();