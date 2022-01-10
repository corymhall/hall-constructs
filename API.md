# API Reference <a name="API Reference"></a>

## Constructs <a name="Constructs"></a>

### HallApp <a name="hall-constructs.HallApp"></a>

#### Initializers <a name="hall-constructs.HallApp.Initializer"></a>

```typescript
import { HallApp } from 'hall-constructs'

new HallApp(props: HallAppProps)
```

##### `props`<sup>Required</sup> <a name="hall-constructs.HallApp.parameter.props"></a>

- *Type:* [`hall-constructs.HallAppProps`](#hall-constructs.HallAppProps)

---





## Structs <a name="Structs"></a>

### HallAppProps <a name="hall-constructs.HallAppProps"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { HallAppProps } from 'hall-constructs'

const hallAppProps: HallAppProps = { ... }
```

##### `repoName`<sup>Required</sup> <a name="hall-constructs.HallAppProps.property.repoName"></a>

```typescript
public readonly repoName: string;
```

- *Type:* `string`

---

## Classes <a name="Classes"></a>

### AwsCdkInspector <a name="hall-constructs.AwsCdkInspector"></a>

A utility class that allows you to apply a list of Aspects to a particular Construct Node.

#### Initializers <a name="hall-constructs.AwsCdkInspector.Initializer"></a>

```typescript
import { AwsCdkInspector } from 'hall-constructs'

new AwsCdkInspector(policies: IAspect[])
```

##### `policies`<sup>Required</sup> <a name="hall-constructs.AwsCdkInspector.parameter.policies"></a>

- *Type:* [`@aws-cdk/core.IAspect`](#@aws-cdk/core.IAspect)[]

---

#### Methods <a name="Methods"></a>

##### `check` <a name="hall-constructs.AwsCdkInspector.check"></a>

```typescript
public check(node: IConstruct)
```

###### `node`<sup>Required</sup> <a name="hall-constructs.AwsCdkInspector.parameter.node"></a>

- *Type:* [`@aws-cdk/core.IConstruct`](#@aws-cdk/core.IConstruct)

---




### DevPack <a name="hall-constructs.DevPack"></a>

A policy pack that makes it easier to cleanup dev environments.

#### Initializers <a name="hall-constructs.DevPack.Initializer"></a>

```typescript
import { DevPack } from 'hall-constructs'

new DevPack()
```


#### Static Functions <a name="Static Functions"></a>

##### `policies` <a name="hall-constructs.DevPack.policies"></a>

```typescript
import { DevPack } from 'hall-constructs'

DevPack.policies()
```



### KmsKeyPolicy <a name="hall-constructs.KmsKeyPolicy"></a>

- *Implements:* [`@aws-cdk/core.IAspect`](#@aws-cdk/core.IAspect)

#### Initializers <a name="hall-constructs.KmsKeyPolicy.Initializer"></a>

```typescript
import { KmsKeyPolicy } from 'hall-constructs'

new KmsKeyPolicy()
```

#### Methods <a name="Methods"></a>

##### `visit` <a name="hall-constructs.KmsKeyPolicy.visit"></a>

```typescript
public visit(node: IConstruct)
```

###### `node`<sup>Required</sup> <a name="hall-constructs.KmsKeyPolicy.parameter.node"></a>

- *Type:* [`@aws-cdk/core.IConstruct`](#@aws-cdk/core.IConstruct)

---


#### Properties <a name="Properties"></a>

##### `description`<sup>Required</sup> <a name="hall-constructs.KmsKeyPolicy.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* `string`

The description of the policy, i.e. what is the policy evaluating.

---

##### `link`<sup>Required</sup> <a name="hall-constructs.KmsKeyPolicy.property.link"></a>

```typescript
public readonly link: string;
```

- *Type:* `string`

The link to the policy documentation.

---

##### `policyName`<sup>Required</sup> <a name="hall-constructs.KmsKeyPolicy.property.policyName"></a>

```typescript
public readonly policyName: string;
```

- *Type:* `string`

The name of the policy.

---


### LogGroupShortRetention <a name="hall-constructs.LogGroupShortRetention"></a>

- *Implements:* [`@aws-cdk/core.IAspect`](#@aws-cdk/core.IAspect)

#### Initializers <a name="hall-constructs.LogGroupShortRetention.Initializer"></a>

```typescript
import { LogGroupShortRetention } from 'hall-constructs'

new LogGroupShortRetention()
```

#### Methods <a name="Methods"></a>

##### `visit` <a name="hall-constructs.LogGroupShortRetention.visit"></a>

```typescript
public visit(node: IConstruct)
```

###### `node`<sup>Required</sup> <a name="hall-constructs.LogGroupShortRetention.parameter.node"></a>

- *Type:* [`@aws-cdk/core.IConstruct`](#@aws-cdk/core.IConstruct)

---


#### Properties <a name="Properties"></a>

##### `description`<sup>Required</sup> <a name="hall-constructs.LogGroupShortRetention.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* `string`

The description of the policy, i.e. what is the policy evaluating.

---

##### `link`<sup>Required</sup> <a name="hall-constructs.LogGroupShortRetention.property.link"></a>

```typescript
public readonly link: string;
```

- *Type:* `string`

The link to the policy documentation.

---

##### `policyName`<sup>Required</sup> <a name="hall-constructs.LogGroupShortRetention.property.policyName"></a>

```typescript
public readonly policyName: string;
```

- *Type:* `string`

The name of the policy.

---


### Policy <a name="hall-constructs.Policy"></a>

- *Implements:* [`hall-constructs.IPolicy`](#hall-constructs.IPolicy)

Represents an Aspect Policy.

#### Initializers <a name="hall-constructs.Policy.Initializer"></a>

```typescript
import { Policy } from 'hall-constructs'

new Policy()
```

#### Methods <a name="Methods"></a>

##### `addError` <a name="hall-constructs.Policy.addError"></a>

```typescript
public addError(node: IConstruct, policy: IPolicy, message: string)
```

###### `node`<sup>Required</sup> <a name="hall-constructs.Policy.parameter.node"></a>

- *Type:* [`constructs.IConstruct`](#constructs.IConstruct)

---

###### `policy`<sup>Required</sup> <a name="hall-constructs.Policy.parameter.policy"></a>

- *Type:* [`hall-constructs.IPolicy`](#hall-constructs.IPolicy)

---

###### `message`<sup>Required</sup> <a name="hall-constructs.Policy.parameter.message"></a>

- *Type:* `string`

---

##### `addInfo` <a name="hall-constructs.Policy.addInfo"></a>

```typescript
public addInfo(node: IConstruct, policy: IPolicy, message: string)
```

###### `node`<sup>Required</sup> <a name="hall-constructs.Policy.parameter.node"></a>

- *Type:* [`constructs.IConstruct`](#constructs.IConstruct)

---

###### `policy`<sup>Required</sup> <a name="hall-constructs.Policy.parameter.policy"></a>

- *Type:* [`hall-constructs.IPolicy`](#hall-constructs.IPolicy)

---

###### `message`<sup>Required</sup> <a name="hall-constructs.Policy.parameter.message"></a>

- *Type:* `string`

---

##### `addWarning` <a name="hall-constructs.Policy.addWarning"></a>

```typescript
public addWarning(node: IConstruct, policy: IPolicy, message: string)
```

###### `node`<sup>Required</sup> <a name="hall-constructs.Policy.parameter.node"></a>

- *Type:* [`constructs.IConstruct`](#constructs.IConstruct)

---

###### `policy`<sup>Required</sup> <a name="hall-constructs.Policy.parameter.policy"></a>

- *Type:* [`hall-constructs.IPolicy`](#hall-constructs.IPolicy)

---

###### `message`<sup>Required</sup> <a name="hall-constructs.Policy.parameter.message"></a>

- *Type:* `string`

---


#### Properties <a name="Properties"></a>

##### `description`<sup>Required</sup> <a name="hall-constructs.Policy.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* `string`

The description of the policy, i.e. what is the policy evaluating.

---

##### `link`<sup>Required</sup> <a name="hall-constructs.Policy.property.link"></a>

```typescript
public readonly link: string;
```

- *Type:* `string`

The link to the policy documentation.

---

##### `policyName`<sup>Required</sup> <a name="hall-constructs.Policy.property.policyName"></a>

```typescript
public readonly policyName: string;
```

- *Type:* `string`

The name of the policy.

---


### Retention <a name="hall-constructs.Retention"></a>

- *Implements:* [`@aws-cdk/core.IAspect`](#@aws-cdk/core.IAspect)

#### Initializers <a name="hall-constructs.Retention.Initializer"></a>

```typescript
import { Retention } from 'hall-constructs'

new Retention()
```

#### Methods <a name="Methods"></a>

##### `visit` <a name="hall-constructs.Retention.visit"></a>

```typescript
public visit(node: IConstruct)
```

###### `node`<sup>Required</sup> <a name="hall-constructs.Retention.parameter.node"></a>

- *Type:* [`@aws-cdk/core.IConstruct`](#@aws-cdk/core.IConstruct)

---


#### Properties <a name="Properties"></a>

##### `description`<sup>Required</sup> <a name="hall-constructs.Retention.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* `string`

The description of the policy, i.e. what is the policy evaluating.

---

##### `link`<sup>Required</sup> <a name="hall-constructs.Retention.property.link"></a>

```typescript
public readonly link: string;
```

- *Type:* `string`

The link to the policy documentation.

---

##### `policyName`<sup>Required</sup> <a name="hall-constructs.Retention.property.policyName"></a>

```typescript
public readonly policyName: string;
```

- *Type:* `string`

The name of the policy.

---


### S3BucketAutoDelete <a name="hall-constructs.S3BucketAutoDelete"></a>

- *Implements:* [`@aws-cdk/core.IAspect`](#@aws-cdk/core.IAspect)

#### Initializers <a name="hall-constructs.S3BucketAutoDelete.Initializer"></a>

```typescript
import { S3BucketAutoDelete } from 'hall-constructs'

new S3BucketAutoDelete()
```

#### Methods <a name="Methods"></a>

##### `visit` <a name="hall-constructs.S3BucketAutoDelete.visit"></a>

```typescript
public visit(node: IConstruct)
```

###### `node`<sup>Required</sup> <a name="hall-constructs.S3BucketAutoDelete.parameter.node"></a>

- *Type:* [`@aws-cdk/core.IConstruct`](#@aws-cdk/core.IConstruct)

---


#### Properties <a name="Properties"></a>

##### `description`<sup>Required</sup> <a name="hall-constructs.S3BucketAutoDelete.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* `string`

The description of the policy, i.e. what is the policy evaluating.

---

##### `link`<sup>Required</sup> <a name="hall-constructs.S3BucketAutoDelete.property.link"></a>

```typescript
public readonly link: string;
```

- *Type:* `string`

The link to the policy documentation.

---

##### `policyName`<sup>Required</sup> <a name="hall-constructs.S3BucketAutoDelete.property.policyName"></a>

```typescript
public readonly policyName: string;
```

- *Type:* `string`

The name of the policy.

---


## Protocols <a name="Protocols"></a>

### IPolicy <a name="hall-constructs.IPolicy"></a>

- *Implemented By:* [`hall-constructs.KmsKeyPolicy`](#hall-constructs.KmsKeyPolicy), [`hall-constructs.LogGroupShortRetention`](#hall-constructs.LogGroupShortRetention), [`hall-constructs.Policy`](#hall-constructs.Policy), [`hall-constructs.Retention`](#hall-constructs.Retention), [`hall-constructs.S3BucketAutoDelete`](#hall-constructs.S3BucketAutoDelete), [`hall-constructs.IPolicy`](#hall-constructs.IPolicy)

Represents an Aspect policy.

All Aspects should implement this interface


#### Properties <a name="Properties"></a>

##### `description`<sup>Required</sup> <a name="hall-constructs.IPolicy.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* `string`

The description of the policy, i.e. what is the policy evaluating.

---

##### `link`<sup>Required</sup> <a name="hall-constructs.IPolicy.property.link"></a>

```typescript
public readonly link: string;
```

- *Type:* `string`

The link to the policy documentation.

---

##### `policyName`<sup>Required</sup> <a name="hall-constructs.IPolicy.property.policyName"></a>

```typescript
public readonly policyName: string;
```

- *Type:* `string`

The name of the policy.

---

## Enums <a name="Enums"></a>

### Level <a name="Level"></a>

Represents the warning level if the policy fails.

The error message will be added with the corresponding annotation method, i.e.

cdk.Annotations.of(node).addError|addWarning|addInfo()

#### `WARN` <a name="hall-constructs.Level.WARN"></a>

---


#### `ERROR` <a name="hall-constructs.Level.ERROR"></a>

---


#### `INFO` <a name="hall-constructs.Level.INFO"></a>

---

