describe("Android Elements Tests", () => {
  it("Find Elements by accessibility id", async () => {
    // find elements by accessibility id
    const appOptions = await $("~App");

    // click on the element
    await appOptions.click();

    // assertion
    const actionBar = await $("~Action Bar");
    await expect(actionBar).toBeDisplayed();
  });
});
