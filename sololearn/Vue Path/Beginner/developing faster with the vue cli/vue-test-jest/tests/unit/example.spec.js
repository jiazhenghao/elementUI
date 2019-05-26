import { shallowMount } from "@vue/test-utils";
import HelloWorld from "@/components/HelloWorld.vue";
import HiChild from "@/components/HiChild.vue";

describe("HelloWorld.vue", () => {
  it("renders props.msg when passed", () => {
    const msg = "new message";
    const wrapper = shallowMount(HelloWorld, {
      propsData: { msg }
    });
    expect(wrapper.text()).toMatch(msg);
  });
});

describe("HiChild.vue", () => {
  it("renders props.message when passed", () => {
    const message = "hello there!";
    const wrapper = shallowMount(HiChild, {
      propsData: { message }
    });
    expect(wrapper.text()).toMatch(message);
  });

  it("renders error when message is too short", () => {
    const wrapper = shallowMount(HiChild, {
      propsData: { message: "hi" }
    });
    expect(wrapper.find(".error").exists()).toBe(true);
    wrapper.setProps({ message: "good day to you!" });
    expect(wrapper.find(".error").exists()).toBe(false);
  });
});
