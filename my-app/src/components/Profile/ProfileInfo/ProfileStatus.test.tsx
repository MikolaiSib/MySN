import React from "react";
import { create } from "react-test-renderer";
import ProfileStatus from "./ProfileStatus";

describe("ProfileStatus", () => {
    test("status in the state", () => {
        const component = create(<ProfileStatus status="qwerty" />);
        const instance = component.getInstance();
        // @ts-ignore
        expect(instance.state.status).toBe("qwerty");
    });
    test("span", () => {
        const component = create(<ProfileStatus status="qwerty" />);
        const root = component.root
        let span = root.findByType("span")
        expect(span).not.toBeNull();
    });
    test("input", () => {
        const component = create(<ProfileStatus status="qwerty" />);
        const root = component.root
        expect(() => {let input = root.findByType("input")}).toThrow();
    });
    test("span2", () => {
        const component = create(<ProfileStatus status="qwerty" />);
        const root = component.root
        let span = root.findByType("span")
        expect(span.children[0]).toBe("qwerty");
    });
    test("editMode", () => {
        const component = create(<ProfileStatus status="qwerty" />);
        const root = component.root
        let span = root.findByType("span")
        span.props.onDoubleClick()
        let input = root.findByType("input")
        expect(input.props.value).toBe("qwerty");
    });
    test("CB", () => {
        const mockCB = jest.fn()
        const component = create(<ProfileStatus status="qwerty" updateStatus={mockCB}/>);
        const instance = component.getInstance();
        // @ts-ignore
        instance.deactivateEditMode()
        expect(mockCB.mock.calls.length).toBe(1);
    });
});
