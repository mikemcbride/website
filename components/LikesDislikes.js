import HeartListItem from './HeartListItem'
import DislikeListItem from './DislikeListItem'

export default function LikesDislikes() {
    return (
        <div className="flex flex-col md:flex-row ml-4 md:ml-0 md:justify-center">
          <section className="mb-12 md:mb-20 md:mr-10">
            <h2
              className="font-sans transform -skew-x-6 font-bold text-3xl mb-4 bg-hot-pink text-white py-1 px-3 inline-block"
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
          <section className="mb-20 md:ml-10">
            <h2
            className="font-sans transform -skew-x-6 font-bold text-3xl mb-4 bg-blue text-white py-1 px-3 inline-block"
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
