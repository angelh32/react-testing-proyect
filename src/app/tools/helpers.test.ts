import { removeHtmlTag } from "./helpers"
describe("#removeHtmlTag", () => {
    const testText = '<p><b>Good Girls</b> follows three "good girl"</p>'
    const expected = 'Good Girls follows three "good girl"'
    test("when string have html tags, it returns a new string", () => {
        return expect(removeHtmlTag(testText)).toEqual(expected)
    })
})