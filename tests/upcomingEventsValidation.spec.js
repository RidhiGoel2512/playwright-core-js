const { test, expect}= require('../fixtures/test')

test.use({
    storageState:'auth/auth.json'
})

test('validating the all categories dropdown options', async ({upcomingEventsPage, featuredPage})=>
{
    await upcomingEventsPage.navigateToUrl('/');
    await featuredPage.eventsink.click();
    await upcomingEventsPage.allCategories.click();
    const predefined1=['All Categiries','Conference','Concert','Sports','Workshop','Festival'];
    //validating All Categories, Conference, Concert, Sports, Workshop, Festival should be displayed
    const predefined=["All Categories🎙 Conference🎵 Concert⚽ Sports🛠 Workshop🎉 Festival"];
    const ddContents = await upcomingEventsPage.validatingDD(upcomingEventsPage.allCategories,predefined);
    console.log(ddContents);
    await expect(ddContents).toEqual(predefined);

})

test('Validate if user is able to select Conference option from the dropdown', async({upcomingEventsPage, featuredPage})=>
{
    await upcomingEventsPage.navigateToUrl('/');
    await featuredPage.eventsink.click();
    await upcomingEventsPage.allCategories.click();
    await upcomingEventsPage.allCategories.selectOption('Conference');
    await upcomingEventsPage.allCategories.selectOption({label:'🎙 Conference'})
    await upcomingEventsPage.allCategories.selectOption({index:2});
});