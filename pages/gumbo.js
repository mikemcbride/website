import PageHeader from '../components/PageHeader'
import Layout from '../components/Layout'

const Gumbo = ({ title, description }) => (
    <Layout pageTitle={title} description={description}>
        <PageHeader>Chicken and Sausage Gumbo</PageHeader>
        <article className="prose lg:prose-xl mb-16 text-black dark:text-gray-300">
            <p>This is my mom's chicken and sausage gumbo recipe. It's here for me to pull up easily, but you're welcome to use it. You'll want to cook this in an enameled cast iron pot or dutch oven for best results.</p>

            <h2>Ingredients</h2>

            <ul>
                <li>4 boneless skinless chicken breasts. You can use 6-8 thighs, but they don't shred very well.</li>
                <li>2 links Andouille sausage, cut into bite sized pieces (about .5 inch half moons)</li>
                <li>1/2 cup flour</li>
                <li>1/2 cup high smoke point oil (grapeseed or canola is good)</li>
                <li>2 large or 3 small white onions, finely chopped</li>
                <li>4-5 stalks of celery, finely chopped</li>
                <li>1 green bell pepper, finely chopped</li>
                <li>5-6 green onions, chopped</li>
                <li>1/2 bunch of fresh parsley, chopped</li>
                <li>3 cloves of minced garlic (use fresh garlic, not the jar stuff)</li>
                <li>1 Tbsp Tony Cachere's seasoning</li>
                <li>1/2 tsp black pepper</li>
                <li>1/2 tsp cayenne pepper</li>
                <li>Salt (pinches here and there - you don't need a lot because Tony's has a ton of salt)</li>
                <li>2 whole bay leaves</li>
                <li>1 12oz bottle amber beer (like Fat Tire)</li>
                <li>2 boxes of low-sodium chicken broth</li>
            </ul>

            <h2>Instructions</h2>

            <ul>
                <li>Chop the vegetables and herbs and set aside. I usually do this the night before to make it easy on myself and throw it all in a ziploc bag.</li>
                <li>Brown the pre-cooked sausage in a cast iron pan. Remove and set aside, do not discard drippings.</li>
                <li>In the same pan, with the sausage drippings still in, brown the chicken. We're not trying to cook it here, just brown it.</li>
                <li>In a cast iron pot, make the roux. Heat the oil over medium heat until it's smoking, then add the flour and stir constantly until it's the color of a Hershey bar.</li>
                <li>When the roux is the desired color, add the trinity of bell pepper, celery, and onion. Stir to mix and let the roux wilt the raw vegetables, about 1 minute. Add a pinch of salt here to help draw moisture out of the vegetables.</li>
                <li>Add in the garlic and bay leaves and cook for 30 seconds to a minute, stirring constantly. The roux should be quite hot, so you don't want to cook this too long or you'll burn the garlic.</li>
                <li>Deglaze the pot with the beer. Make sure to scrape up any browned bits on the bottom of the pot.</li>
                <li>Add in the chicken broth, stirring well as you pour to incorporate.</li>
                <li>Add the chicken, sausage, parsley, Tony's, black pepper, and cayenne. Stir to blend.</li>
                <li>Partially cover and cook for 2-3 hours over medium heat so the broth can thicken. Stir every 20-30 minutes to keep it from burning.</li>
                <li>When the liquid is at the desired level, you can lower the heat to low and simmer.</li>
                <li>If the liquid gets too low, you can just add more water or chicken broth. Adjust seasoning to taste (if it's too strong, just add water).</li>
                <li>Serve over rice, top with green onion if desired.</li>
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
