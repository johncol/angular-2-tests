export class SearchResult {
	id: string;
	title: string;
	description: string;
	thumbnailUrl: string;
	videoUrl: string;

	constructor(data?: any) {
		this.id = data && data.id || null;
		this.title = data && data.title || null;
		this.description = data && data.description || null;
		this.thumbnailUrl = data && data.thumbnailUrl || null;
		this.videoUrl = data && data.videoUrl || `https://www.youtube.com/watch?v=${this.id}`;
	}
}