import React from 'react'
import {Grid} from 'semantic-ui-react'
import {Category} from "./Category"

export default class ActivityCategoriesList extends React.Component {

    render() {

        let category = this.props.activityCategories.map((category, index) =>
            <Category
                text={category.text}
                key={index}
                value={category.value}
                onClick={this.props.onCategorySelect}
                isActive={this.props.selectedCategory === category.value}
                onMouseEnter={this.props.onMouseEnter}
                onMouseLeave={this.props.onMouseLeave}
                color={this.props.color}
                isHovered={this.props.hoveredCategory === category.value}
            />
        )

        return (
            <Grid
                columns={5}
                doubling stackable
            >
                {category}
            </Grid>
        )
    }
}



