import { useEffect, useState } from 'react'
import RangeSlider from 'react-range-slider-input'
import 'react-range-slider-input/dist/style.css'
import Button from '../../components/Button'
import { PARAMS_FILTER, PRICE_STEP } from '../../utils/constants'
import { useLocation, useNavigate } from 'react-router-dom'
import formatter from 'utils/formatterMoney'

// round to PRICE_STEP and keep inside [min, max]
const snapPrice = (value, [min, max]) =>
  Math.min(max, Math.max(min, Math.round(value / PRICE_STEP) * PRICE_STEP))

const PriceSlider = (props) => {
  const { priceRange, priceRangeParams, handleFilterPriceRange } = props;

  const location = useLocation();
  const navigate = useNavigate();

  const [price, setPrice] = useState(
    priceRangeParams.map((value) => snapPrice(value, priceRange))
  )

  const [paramMin, paramMax] = priceRangeParams
  const [rangeMin, rangeMax] = priceRange

  useEffect(() => {
    setPrice([
      snapPrice(paramMin, [rangeMin, rangeMax]),
      snapPrice(paramMax, [rangeMin, rangeMax]),
    ]);
  }, [paramMin, paramMax, rangeMin, rangeMax]);
  
  const min = price[0]
  const max = price[1]

  const showPriceRange = () => {
    const searchParams = new URLSearchParams(location.search);
    const path = location.pathname.split("/page")[0]
    searchParams.set(PARAMS_FILTER.minPrice, Math.min(...price));
    searchParams.set(PARAMS_FILTER.maxPrice, Math.max(...price));
    navigate(`${path}?${searchParams.toString()}`);
    handleFilterPriceRange(Math.min(...price), Math.max(...price))
  }

  return (
    <>
      <div className="sidebar-filter-price__slider">
        <RangeSlider
          min={priceRange[0]}
          max={priceRange[1]}
          step={PRICE_STEP}
          value={price}
          rangeSlideDisabled={true}
          onInput={(e) => {
            setPrice(e)
          }}
        />
        <div className="sidebar-filter-price__slider--label">
          Price: {formatter(min)} - {formatter(max)}
        </div>
        <Button
          type="primary"
          size="small"
          ghost
          className="w-100 text-center"
          onClick={showPriceRange}
        >
          filter
        </Button>
      </div>
    </>
  )
}
export default PriceSlider
