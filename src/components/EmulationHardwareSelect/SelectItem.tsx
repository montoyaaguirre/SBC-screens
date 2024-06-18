import * as  Select from "@radix-ui/react-select";
import React from "react";

export const SelectItem = React.forwardRef<
React.ElementRef<typeof Select.Item>, 
React.ComponentPropsWithoutRef<typeof Select.Item>
>(({children, ...props}, forwardRef) => {
    return (
        <Select.Item {...props} ref={forwardRef}>
            <Select.ItemText>{children}</Select.ItemText>
        </Select.Item>
    );
});