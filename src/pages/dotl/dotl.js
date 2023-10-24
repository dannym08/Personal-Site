import React from "react"

import { useState } from "react"

const Dotl = () => {
    const [currency, setCurrency] = useState(0);

    return (
        <section className="content-section">
            <div className="content-section-content">
                Testing in progres.... {currency}
            </div>
        </section>
    )
}

export default Dotl;