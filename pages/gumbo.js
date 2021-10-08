import PageHeader from '../components/PageHeader'
import Layout from '../components/Layout'
import BigQuote from '../components/BigQuote'

const Gumbo = ({ title, description }) => (
    <Layout pageTitle={title} description={description}>
        <PageHeader>Chicken and Sausage Gumbo</PageHeader>
        <article className="prose lg:prose-xl mb-16 text-black dark:text-gray-300">
            <p>This is my mom's chicken and sausage gumbo recipe. It's here for me to pull up easily, but you're welcome to use it. You'll want to cook this in an enameled cast iron pot or dutch oven for best results.</p>

            <h2>Ingredients</h2>

            <ul>
                <li>4 boneless skinless chicken breasts or 6-8 thighs</li>
                <li>2 links Andouille sausage, cut into bite sized pieces</li>
                <li>3/4 cup flour</li>
                <li>3/4 cup vegetable oil</li>
                <li>2 large or 3 small white onions, finely chopped</li>
                <li>4-5 stalks of celery, finely chopped</li>
                <li>1 green bell pepper, finely chopped</li>
                <li>5-6 green onions, chopped</li>
                <li>1/2 bunch of fresh parsley, chopped</li>
                <li>2-3 cloves of minced garlic</li>
                <li>2 Tbsp Tony Cachere's seasoning</li>
                <li>1/2 tsp black pepper</li>
                <li>1/2 tsp cayenne pepper</li>
                <li>2 whole bay leaves</li>
                <li>2 boxes of low-sodium chicken broth</li>
            </ul>

            <h2>Instructions</h2>

            <ul>
                <li>Chop the vegetables and herbs and set aside. I usually do this the night before to make it easy on myself and throw it all in a ziploc bag.</li>
                <li>Brown the pre-cooked sausage in a cast iron pan. Remove and set aside, do not discard drippings.</li>
                <li>In the same pan, with the sausage drippings still in, brown the chicken. We're not trying to cook it here, just brown it.</li>
                <li>In a cast iron pot, make the roux. Cook the flour and oil together over medium heat until it's the color of a Hershey bar (you can go darker if you wish). Stir constantly so you do not burn it!</li>
                <li>When the roux is the desired color, add the Cajun Trinity vegetables. Stir to mix and let the roux wilt the raw vegetables.</li>
                <li>Add in the chicken broth, stirring well to incorporate.</li>
                <li>Add the chicken, sausage, and remaining vegetables and seasonings except the green onion (garlic, parsley, bay leaves, Tony's, red and black pepper). Stir to blend.</li>
                <li>Cook for about 2 hours over medium heat with the lid off (or half off) so the broth can thicken. Stir every 20-30 minutes to keep it from burning.</li>
                <li>When the liquid is at the desired level, you can put the lid on the pot and lower the heat to low and simmer.</li>
                <li>If the liquid gets too low, you can just add more water or chicken broth. Adjust seasoning to taste.</li>
                <li>Serve over rice.</li>
            </ul>
        </article>
    </Layout>
)

export default Gumbo

export async function getStaticProps() {
    const configData = await import('../siteconfig.json')

    return {
        props: {
            title: configData.default.gumbo.title,
            description: configData.default.gumbo.description
        },
    }
}
