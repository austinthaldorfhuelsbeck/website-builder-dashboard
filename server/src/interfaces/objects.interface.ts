interface ITimestamps {
	created_at: Date
	updated_at: Date
}

interface IBaseBlog extends ITimestamps {
	title: string
	category: string
	text: string
	img: string
}

interface IBlog extends IBaseBlog {
	blog_id: number
	featured: boolean
	topic: string
	content: string
	audio: string | undefined
	video: string | undefined
	url: string
}
