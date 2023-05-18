import React, { useContext, useEffect, useState, useCallback } from 'react';
import ReactSlider from 'react-slider';
import { AppContext } from '../AppContext';
import './slider.css';
import debounce from 'lodash.debounce';

function PriceSlider({ maxPrice }) {
    const [min, setMin] = useState(0);
    const [max, setMax] = useState(maxPrice);
    const [debouncedMin, setDebouncedMin] = useState(0);
    const [debouncedMax, setDebouncedMax] = useState(maxPrice);

    const { catalog } = useContext(AppContext);

    const handlePriceChange = (value) => {
        setMin(parseInt(value[0]));
        setMax(parseInt(value[1]));
        debouncedSetMin(value[0]);
        debouncedSetMax(value[1]);
    };

    const debouncedSetMin = useCallback(
        debounce((value) => {
          setDebouncedMin(value);
        }, 500),
        [],
    );
    
    const debouncedSetMax = useCallback(
        debounce((value) => {
          setDebouncedMax(value);
        }, 500),
        [],
    );

    useEffect(() => {
        catalog.minPrice = Number(min);
        catalog.maxPrice = Number(max);
    }, [debouncedMin, debouncedMax]);

    const handleChange = (e, name) => {
        let inputValue = e.target.value.replace(/\D/g, '');
        if (!/^[1-9]$/.test(min) || !/^[1-9]$/.test(max)) {
            inputValue = e.target.value;
        }
    
        if (/^\d*$/.test(inputValue) && inputValue <= maxPrice) {
            if (name === 'min') {
                if (inputValue > max) {
                } else {
                setMin(Number(e.target.value));
                debouncedSetMin(Number(e.target.value));
                }
            } else {
                if (inputValue < min) {
                return;
                } else {
                setMax(Number(e.target.value));
                debouncedSetMax(Number(e.target.value));
                }
            }
        } else if (inputValue > maxPrice) {
            if (name === 'max') {
                setMax(maxPrice);
            }
        }
    };
    useEffect(() => {
        console.log(min, max);
    }, [min, max]);

    const handlePaste = (event) => {
        const pastedValue = event.clipboardData.getData('text');
        if (!/^\d*$/.test(pastedValue) || parseInt(pastedValue) > maxPrice) {
            event.preventDefault();
        }
    };

    const handleKeyDown = (event) => {
        if (
            event.keyCode === 69 ||
            (event.keyCode === 189 && event.target.length === 0) ||
            event.key === '.' ||
            event.key === ',' ||
            event.key === '-'
        ) {
            event.preventDefault();
        }
    };

    return (
        <>
            <h6>Стоимость</h6>
            <div className="prices">
                <div className="prices_container">
                <input
                    className="prices_inp"
                    type="text"
                    value={min}
                    onKeyDown={handleKeyDown}
                    onPaste={handlePaste}
                    onChange={(e) => handleChange(e, 'min')}
                />
                </div>
                <div className="prices_container">
                <input
                    className="prices_inp"
                    type="text"
                    value={max}
                    onKeyDown={handleKeyDown}
                    onPaste={handlePaste}
                    onChange={(e) => handleChange(e, 'max')}
                />
                </div>
            </div>
            <ReactSlider
                min={!isNaN(min) ? 0 : 0}
                max={!isNaN(max) ? maxPrice : 0}
                className="horizontal-slider"
                thumbClassName="example-thumb"
                trackClassName="example-track"
                value={[min, max]}
                onChange={handlePriceChange}
                ariaLabel={['Lower thumb', 'Upper thumb']}
                ariaValuetext={(state) => `Thumb value ${state.valueNow}`}
                renderThumb={(props, state) => (
                <div {...props}>{`${state.valueNow.toLocaleString('ru-RU')}\u00A0тг.`}</div>
                )}
            />
        </>
    );
}

export default PriceSlider;