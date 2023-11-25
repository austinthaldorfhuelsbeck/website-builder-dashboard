# Cathy Loerzel

This project is a single-page application designed as a personal website, a post, and a landing page to promote Cathy Loerzel and her book, Redeeming Heartache.

The app stores all requisite data for posts, topics, categories, testimonials, and events within a database, and provides a service to the administrator for interacting with and modifying this data.

The admin dashboard allows admin users to perform API-enabled actions upon the data from within a user-friendly dashboard.

### The current deployment is available [here](https://cathyloerzel.com/).

## Custom API Solution

*(updated 09-02-2021)* //TODO 2023 update

A custom API solution for keeping track of various data throughout the site. The API keeps track of posts, their topics, and their categories. It also manages testimonials for "Redeeming Heartache", and upcoming events.

The API powers the display of the site, as well as the functionality of the admin page.

### Posts

Posts encompass writing, podcasts, and videos of Cathy's teaching. Each post is organized by category and topic.

Posts click through to an individual post page, which displays the data for a single in greater detail for the user to experience. The post page is designed to display any of these three types of post, and adjust what is displayed accordingly.

The post object is structured as follows:

- post_id (string): PRIMARY This is parameter read by the component from the URL. Unique identifier, required, will be auto generated in dashboard form if not provided.
- title (string): (required) The unique title of the post to be displayed.
- featured (boolean): Whether or not the post is featured.
- category (string): (required) Currently, categories are: writing, podcasts, teaching.
- topic (string): (required) A topic, to categorize the post, used in sorting cards.
- date (date): (required) Date the content was published, MM-DD-YYYY.
- text (string): (required) The description provided for the card to display, for example the first paragraph of the post.
- img (string): (required) The public URL for the banner image for the post, should be 16x9.
- content (string): (required) The HTML of the full content of the.
- audio (string): The public URL for the audio of a podcast.
- video (string): The public URL for the video of a teaching.
- url (string): The clickthrough link fors which are originally hosted elsewhere.

#### Posts - Methods and Routing

The methods and routing for the posts section of the API is as follows:

- GET / - list all posts
- POST / - create a new post
- GET /category=:post_category - list all posts in a category
- GET /topic=:post_topic - list all posts of a topic
- GET /:post_id - read a post by ID
- GET /featured - list all posts which are featured
- PUT /:post_id - update a post by ID
- DELETE /:post_id - delete a post by ID

### Topics

Topics categorize posts by subject matter. They relate to the Posts table.

The topic object is structured as follows:

- topic_id (integer): PRIMARY Unique numerical identifier
- topic (string): (required) Name of the topic which relates to Posts table
- color (string): (required) Hex value of the color to associate with this topic.

#### Topics - Methods and Routing

The methods and routing for the topics section of the API is as follows:

- GET / - list all topics
- GET /:topic_id - read a topic by ID
- PUT /:topic_id - update a topic
- POST / - create a new topic
- DELETE /:topic_id - delete a topic

### Categories

Categories represent the type of post. They relate to the Posts table.

The category object is structured as follows:

- category_id (integer): PRIMARY Unique numerical identifier
- category (string): (required) Name of the category which relates to Posts table

#### Categories - Methods and Routing

The methods and routing for the categories section of the API is as follows:

- GET / - list all categories
- GET /:category_id - read a category by ID
- PUT /:category_id - update a category
- POST / - create a new category
- DELETE /:category_id - delete a category

### Testimonials

Testimonials are used for the Redeeming Heartache landing page. A carousel cycles through cards which are populated from the database.

The testimonial object is structured as follows:

- testimonial_id (integer): (required) A unique numerical identifier.
- name (string): (required) First and last name of the author of the testimonial.
- title (string): (required) Professional title of the author of the testimonial.
- message (string, 1000): (required) The testimonial itself.

#### Testimonials - Methods and Routing

The methods and routing for the testimonials section of the API is as follows:

- GET / - list all testimonials
- GET /:testimonial_id - read a testimonial by ID
- PUT /:testimonial_id - update a testimonial
- POST / - create a new testimonial
- DELETE /:testimonial_id - delete a testimonial

### Events

Events are used for the Upcoming Events component. An accordion displays details for events which are populated from the database.

The event object is structured as follows:

- event_id (integer): (required) A unique numerical identifier.
- name (string): (required) Name of the upcoming event.
- date (string): (required) Date(s) of the upcoming event.
- content (string, 10000): (required) The HTML of the full content of the.

#### Events - Methods and Routing

The methods and routing for the events section of the API is as follows:

- GET / - list all events
- GET /:event_id - read an event by ID
- PUT /:event_id - update an event
- POST / - create a new event
- DELETE /:event_id - delete an event
