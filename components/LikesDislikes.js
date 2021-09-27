import HeartListItem from './HeartListItem'
import DislikeListItem from './DislikeListItem'

export default function LikesDislikes() {
    return (
        <div className="grid md:grid-cols-2 mb-20 gap-12">
          <section>
            <h2
              className="font-slab font-bold text-3xl mb-4 border-b-2 border-hot-pink dark:border-pink-500 py-1 block"
            >Things I Like</h2>
            <ul>
              <HeartListItem>Peanut butter and jelly sandwiches</HeartListItem>
              <HeartListItem>Hammocks</HeartListItem>
              <HeartListItem>Jesus</HeartListItem>
              <HeartListItem>Chicken and sausage gumbo</HeartListItem>
              <HeartListItem>Hugs</HeartListItem>
              <HeartListItem>Playing piano</HeartListItem>
              <HeartListItem>Pineapple on pizza</HeartListItem>
            </ul>
          </section>
          <section>
            <h2
            className="font-slab font-bold text-3xl mb-4 border-b-2 border-blue-600 py-1 block"
            >
            Things I Dislike
            </h2>
            <ul>
              <DislikeListItem>Glitter 🤮</DislikeListItem>
              <DislikeListItem>Hair spray</DislikeListItem>
              <DislikeListItem>Bug bites</DislikeListItem>
              <DislikeListItem>Washing dishes</DislikeListItem>
              <DislikeListItem>Cottage cheese</DislikeListItem>
              <DislikeListItem>Glitter (again)</DislikeListItem>
            </ul>
          </section>
        </div>
    )
}
