import {textDefaultProps} from "@/defaultProps";
import {shallowMount} from "@vue/test-utils";
import {PText} from "@/index";

describe('PText.vue', () => {
    const {location} = window
    beforeEach(() => {
        Object.defineProperty(window, 'location', {
            writable: true,
            value: {href: ''}
        })
    })
    afterEach(() => {
        window.location = location
    })

    it('Default PText render', () => {
        const msg = 'test'
        const props = {
            ...textDefaultProps,
            text: msg
        }
        const wrapper = shallowMount(PText, {props})
        // should have right text
        expect(wrapper.text()).toBe(msg)
        // should be div tag
        expect(wrapper.element.tagName).toBe('DIV')
        // should have certain css attr
        const style = wrapper.attributes().style
        console.log(style)
        expect(style.includes('font-size')).toBeTruthy()
        // prop should not have been filtered
        expect(style.includes('actionType')).toBeFalsy()
    });

    it('PText with actionType and URL should trigger location href change', async () => {
        const props = {
            ...textDefaultProps,
            actionType: 'url',
            url: 'http://dummy.url',
            tag: 'h2'
        }
        const wrapper = shallowMount(PText, {props})
        expect(wrapper.element.tagName).toBe('H2')
        await wrapper.trigger('click')
        expect(window.location.href).toBe('http://dummy.url')
    })

    it('PText with isEditing and URL should trigger location href change', async () => {
        const props = {
            ...textDefaultProps,
            actionType: 'url',
            url: 'http://dummy.url',
            tag: 'h2',
            isEditing: true
        }
        const wrapper = shallowMount(PText, {props})
        await wrapper.trigger('click')
        expect(window.location.href).not.toBe('http://dummy.url')
    })
})
