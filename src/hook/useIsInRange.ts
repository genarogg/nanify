import React from "react";

interface UseIsInRangeProps {
    min?: number;
    max?: number;
}

const useIsInRange = ({ min, max }: UseIsInRangeProps) => {
    const [isInRange, setIsInRange] = React.useState(false);

    React.useEffect(() => {
        const handleResize = () => {
            const width = window.innerWidth;
            let condition = true;

            if (min !== undefined) condition = condition && width >= min;
            if (max !== undefined) condition = condition && width <= max;

            setIsInRange(condition);
        };

        window.addEventListener("resize", handleResize);
        handleResize(); // comprobar al inicio

        return () => window.removeEventListener("resize", handleResize);
    }, [min, max]);

    return isInRange;
};

export default useIsInRange;
