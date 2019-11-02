import React from 'react';
import { 
    List, 
    Create,
    Datagrid, 
    TextField, 
    ReferenceField, 
    EditButton, 
    Edit,
    SimpleForm,
    DisabledInput,
    TextInput,
    LongTextInput,
    ReferenceInput,
    SelectInput,
    Filter
} from 'react-admin';

const PostFilter = (props) => (
    <Filter {...props}>
        <TextInput label="Search" source="q" alwaysOn />
        <ReferenceInput label="User" source="user_id" reference="User" allowEmpty>
            <SelectInput optionText="name" />
        </ReferenceInput>
    </Filter>
);

export const PostList = props => (
    <List filters={<PostFilter />} {...props}>
        <Datagrid rowClick="edit">
            <ReferenceField source="user_id" reference="User">
                <TextField source="name" />
            </ReferenceField>
            <TextField source="id" />
            <TextField source="title" />
            <TextField source="body" />
            <EditButton />
        </Datagrid>
    </List>
);

const PostTitle = ({ record }) => {
    return <span>Post {record ? `"${record.title}"` : ''}</span>;
};

export const PostEdit = props => (
    <Edit {...props} title={<PostTitle />}>
        <SimpleForm>
            <ReferenceInput source="user_id" reference="User">
                <SelectInput optionText="name" />
            </ReferenceInput>
            <DisabledInput source="id" />
            <TextInput source="title" />
            <LongTextInput source="body" />
        </SimpleForm>
    </Edit>
);

export const PostCreate = props => (
    <Create {...props} title={<PostTitle />}>
        <SimpleForm>
            <ReferenceInput source="user_id" reference="User">
                <SelectInput optionText="name" />
            </ReferenceInput>
            <TextInput source="id" />
            <TextInput source="title" />
            <TextInput source="views" />
            <LongTextInput source="body" />
        </SimpleForm>
    </Create>
);