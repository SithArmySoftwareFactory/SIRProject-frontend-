import React, {useEffect} from "react";
import Chip from "@mui/material/Chip";
import TextField from "@mui/material/TextField";
import Downshift from "downshift";


export default function TagsInput({...props}) {
    const {
        selectedTags,
        placeholder,
        tags,
        eventTags = [],
        departmentTags = [],
        deleteEventTags = {},
        ...other
    } = props;
    const [inputValue, setInputValue] = React.useState("");
    const [selectedItem, setSelectedItem] = React.useState([]);
    useEffect(() => {
        setSelectedItem(tags);
    }, [tags]);
    useEffect(() => {
        setSelectedItem(selectedItem);
    }, [selectedItem, selectedTags]);

    //lets add our tags in from props
    useEffect(() => {
        //redefined handleChange function to accept array
        //this loop wil be called into the handle change function
        if (eventTags !== 'undefined') {
            for (let i = 0; i < eventTags.length; i++) {
                handleChange(eventTags[i], eventTags)
            }
        }

        if (departmentTags !== 'undefined') {
            for (let i = 0; i < departmentTags.length; i++) {
                handleChange(departmentTags[i], departmentTags)
            }
        }
    }, [eventTags, departmentTags])

    function handleKeyDown(event) {
        if (event.key === "Enter") {
            const newSelectedItem = [...selectedItem];
            const duplicatedValues = newSelectedItem.indexOf(
                event.target.value.trim()
            );

            if (duplicatedValues !== -1) {
                setInputValue("");
                return;
            }
            if (!event.target.value.replace(/\s/g, "").length) return;

            newSelectedItem.push(event.target.value.trim());
            setSelectedItem(newSelectedItem);
            setInputValue("");
        }
        if (
            selectedItem.length &&
            !inputValue.length &&
            event.key === "Backspace"
        ) {
            setSelectedItem(selectedItem.slice(0, selectedItem.length - 1));
        }
    }

    function handleChange(item, previousItems) {
        let newSelectedItem = [...selectedItem];
        if (previousItems !== null) {
            newSelectedItem = previousItems;
        }
        if (newSelectedItem.indexOf(item) === -1) {
            newSelectedItem = [...newSelectedItem, item];
        }
        setInputValue("");
        setSelectedItem(newSelectedItem);
    }

    const handleDelete = item => () => {
        const newSelectedItem = [...selectedItem];
        newSelectedItem.splice(newSelectedItem.indexOf(item), 1);
        setSelectedItem(newSelectedItem);
        deleteEventTags(item);
    };

    function handleInputChange(event) {
        setInputValue(event.target.value);
    }

    return (
        <React.Fragment>
            <Downshift
                id="downshift-multiple"
                inputValue={inputValue}
                onChange={handleChange}
                selectedItem={selectedItem}
            >
                {({getInputProps}) => {
                    const {onBlur, onChange, onFocus, ...inputProps} = getInputProps({
                        onKeyDown: handleKeyDown,
                        placeholder
                    });
                    return (
                        <div>
                            <TextField
                                InputProps={{
                                    startAdornment: selectedItem.map(item => (
                                        <Chip
                                            key={item}
                                            tabIndex={-1}
                                            label={item}
                                            onDelete={handleDelete(item)}
                                        />
                                    )),
                                    onBlur,
                                    onChange: event => {
                                        handleInputChange(event);
                                        onChange(event);
                                    },
                                    onFocus
                                }}
                                {...other}
                                {...inputProps}
                            />
                        </div>
                    );
                }}
            </Downshift>
        </React.Fragment>
    );
}
TagsInput.defaultProps = {
    tags: []
};
